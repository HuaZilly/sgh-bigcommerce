(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _f_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./f/api */ "./assets/js/theme/f/api.js");
/* harmony import */ var _f_check_validity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./f/check-validity */ "./assets/js/theme/f/check-validity.js");






function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    // Classes
    this.classRow = '.cart-item-title';
    this.classResultMessage = '.list-feedback';

    // Class names
    this.classNameRowError = 'list-add__row--error';

    // Functional assignments
    this.$form = $('.cart-list-form');
    this.$newList = $('.add-new-list');
    this.$addingOverlay = $('.loading-overlay');
    this.$document = $(document);
    this.resetState();
    this.bindEvents();
  };
  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  }

  // Run AJAX calls one by one
  ;
  _proto.handleAjax = function handleAjax() {
    var _this = this;
    if (this.currentLoop < this.items.length) {
      $(this.classResultMessage).html("Saving<br> " + this.items[this.currentLoop].pname + "<br> to your list");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/add-to-list-response'
      }, function (err) {
        if (err) {
          throw new Error(err);
        }

        // Increment 'current' and run AJAX call again
        _this.currentLoop++;
        _this.handleAjax();
      });
    }

    // Last attempt, redirect only
    if (this.currentLoop === this.items.length) {
      this.$addingOverlay.hide();
      if (this.listTarget !== '' && this.listTarget !== undefined) {
        document.location.href = "/wishlist.php?action=viewwishlistitems" + this.listTarget;
      } else {
        document.location.href = '/wishlist.php';
      }
      // $('.multi_add__cart-button').css('display', 'inline-block');
      // $('.multi-add__row[data-status=success]').remove();
    }
  };
  _proto.processForm = function processForm(event, form) {
    var _this2 = this;
    event.preventDefault();
    this.$addingOverlay.show();
    var allRows = $(form).find(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState();

    // For each row, add the URL and target to the items array
    allRows.each(function (index, row) {
      var target = $(row);
      var pid = target.find('[data-pid]').val();
      var pname = target.find('.cart-item-name').attr('data-pname');
      _this2.listTarget = $('#list-id').val();
      if (_this2.listTarget !== '' && _this2.listTarget !== undefined) {
        _this2.listTarget = "&wishlistid=" + _this2.listTarget;
      } else {
        _this2.listTarget = '';
      }
      var url = "/wishlist.php?action=add&product_id=" + pid + _this2.listTarget;
      _this2.items.push({
        url: url,
        target: target,
        pname: pname
      });
    });

    // To add lang string
    allMessages.text('Saving to list...').show();
    this.handleAjax();
  };
  _proto.openAddList = function openAddList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage('/cart.php', {
      template: 'f/cart/add-list-form'
    }, function (err, response) {
      if (err) {
        throw new Error(err);
      }
      if (response.length) {
        modal.updateContent(response);
        $('#wishlistname').select();
      }
    });
    modal.open();
  };
  _proto.addNewList = function addNewList(event) {
    event.preventDefault();
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    var listName = $('#wishlistname').val();
    var sharedList = $('#publicwishlist').val();
    var targetUrl = '/wishlist.php?action=addwishlist&product_id=';
    $.ajax({
      method: 'POST',
      url: targetUrl,
      data: {
        wishlistname: listName,
        publicwishlist: sharedList,
        submit: null
      }
    }).done(function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.getPage('/wishlist.php', {
        template: 'f/b2b/list-added-response'
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        if (response.length) {
          // replace contents of '.list-selector' with response
          $('.list-selector').html(response);
        }
        modal.close();
      });
    });
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this3 = this;
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantity-max'), 10);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var minError = $el.data('quantity-min-error');
    var maxError = $el.data('quantity-max-error');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not qualify for min/max quantity
    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this4 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cart-itemid');
    var $el = $("#qty-" + itemId);
    var minQty = parseInt($el.data('quantity-min'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var newQty = parseInt(Number($el.val()), 10);
    if (_f_check_validity__WEBPACK_IMPORTED_MODULE_13__["default"]) {
      if (!$target[0].checkValidity()) {
        $target[0].reportValidity();
        return;
      }
    } else {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: "Please enter a valid quantity (multiples of " + $target[0].step + ")",
        type: 'error'
      });
    }
    var invalidEntry;
    // Does not quality for min/max quantity
    if (newQty < 0 || Number.isNaN(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else {
      this.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this4.$overlay.hide();
        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;
          _this4.refreshContent(remove);
        } else {
          $el.val(oldQty);
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    }
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this5 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this5.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        }).then(function () {
          _this5.refreshContent(true);
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this6 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this6.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $changedOption = $(currentTarget);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove, empty) {
    var _this7 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }

    // Remove last item from cart? Reload
    if (remove && empty) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getContent(options, function (err, response) {
      _this7.$cartContent.html(response.content);
      _this7.$cartTotals.html(response.totals);
      _this7.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this7.bindEvents();
      _this7.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this7.$cartContent).data('cart-quantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this8 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // clear cart
    $('[data-cart-clear]', this.$cartContent).on('click', function (event) {
      event.preventDefault();
      Object(_f_api__WEBPACK_IMPORTED_MODULE_12__["default"])("/api/storefront/carts/" + _this8.context.cartId, 'DELETE', {}).then(_this8.refreshContent(true, true));
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();
      event.stopImmediatePropagation();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      event.stopImmediatePropagation();
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this8.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this9 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this9.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: response.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this10 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_8__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this10.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this11 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this11.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    var _this12 = this;
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();
    this.$form.on('click', '[data-save-cart]', function (event) {
      _this12.processForm(event, _this12.$form[0]);
    });
    this.$newList.on('click', function (event) {
      _this12.openAddList(event);
    });
    this.$document.on('click', '.add-new-list-form .button', function (event) {
      _this12.addNewList(event);
    });

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__["default"]($('[data-shipping-estimator]'));
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");








var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/f/api.js":
/*!**********************************!*\
  !*** ./assets/js/theme/f/api.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apiCall; });
function apiCall(url, method, payload) {
  return fetch(url, {
    method: method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then(function (response) {
    return response;
  });
}

/***/ }),

/***/ "./assets/js/theme/f/check-validity.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/check-validity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var input = document.createElement('input');
  return typeof input.reportValidity === 'function';
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2hlY2stdmFsaWRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9zd2VldC1hbGVydC5qcyJdLCJuYW1lcyI6WyJDYXJ0IiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCIkY2FydENvbnRlbnQiLCIkIiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJG92ZXJsYXkiLCJoaWRlIiwiY2xhc3NSb3ciLCJjbGFzc1Jlc3VsdE1lc3NhZ2UiLCJjbGFzc05hbWVSb3dFcnJvciIsIiRmb3JtIiwiJG5ld0xpc3QiLCIkYWRkaW5nT3ZlcmxheSIsIiRkb2N1bWVudCIsImRvY3VtZW50IiwicmVzZXRTdGF0ZSIsImJpbmRFdmVudHMiLCJpdGVtcyIsImVycm9ycyIsImN1cnJlbnRMb29wIiwiaGFuZGxlQWpheCIsIl90aGlzIiwibGVuZ3RoIiwiaHRtbCIsInBuYW1lIiwidXRpbHMiLCJhcGkiLCJnZXRQYWdlIiwidXJsIiwidGVtcGxhdGUiLCJlcnIiLCJFcnJvciIsImxpc3RUYXJnZXQiLCJ1bmRlZmluZWQiLCJsb2NhdGlvbiIsImhyZWYiLCJwcm9jZXNzRm9ybSIsImV2ZW50IiwiZm9ybSIsIl90aGlzMiIsInByZXZlbnREZWZhdWx0Iiwic2hvdyIsImFsbFJvd3MiLCJmaW5kIiwiYWxsTWVzc2FnZXMiLCJlYWNoIiwiaW5kZXgiLCJyb3ciLCJ0YXJnZXQiLCJwaWQiLCJ2YWwiLCJhdHRyIiwicHVzaCIsInRleHQiLCJvcGVuQWRkTGlzdCIsIm1vZGFsIiwiZGVmYXVsdE1vZGFsIiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50Iiwic2VsZWN0Iiwib3BlbiIsImFkZE5ld0xpc3QiLCJsaXN0TmFtZSIsInNoYXJlZExpc3QiLCJ0YXJnZXRVcmwiLCJhamF4IiwibWV0aG9kIiwiZGF0YSIsIndpc2hsaXN0bmFtZSIsInB1YmxpY3dpc2hsaXN0Iiwic3VibWl0IiwiZG9uZSIsImNsb3NlIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpczMiLCJpdGVtSWQiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzd2FsIiwidHlwZSIsImNhcnQiLCJpdGVtVXBkYXRlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczQiLCJOdW1iZXIiLCJ2YWxpZGl0eSIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsInN0ZXAiLCJpbnZhbGlkRW50cnkiLCJpc05hTiIsImNhcnRSZW1vdmVJdGVtIiwiX3RoaXM1IiwiaXRlbVJlbW92ZSIsInRoZW4iLCJjYXJ0RWRpdE9wdGlvbnMiLCJfdGhpczYiLCJvcHRpb25zIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJjb250ZW50IiwiYmluZEdpZnRXcmFwcGluZ0Zvcm0iLCJob29rcyIsIm9uIiwiY3VycmVudFRhcmdldCIsIiRjaGFuZ2VkT3B0aW9uIiwicGFyZW50cyIsIiRzdWJtaXQiLCIkbWVzc2FnZUJveCIsIml0ZW0iLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiZW1wdHkiLCJfdGhpczciLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJ3aW5kb3ciLCJyZWxvYWQiLCJnZXRDb250ZW50IiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzOCIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwiYXBpQ2FsbCIsImNvbnRleHQiLCJjYXJ0SWQiLCJvblF0eUZvY3VzIiwidmFsdWUiLCJjaGFuZ2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzdHJpbmciLCJzaG93Q2FuY2VsQnV0dG9uIiwiYmluZFByb21vQ29kZUV2ZW50cyIsIl90aGlzOSIsIiRjb3Vwb25Db250YWluZXIiLCIkY291cG9uRm9ybSIsIiRjb2RlSW5wdXQiLCJjb2RlIiwiYXBwbHlDb2RlIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIl90aGlzMTAiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJnaWZ0Q2VydENoZWNrIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzMTEiLCJnZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyIsIiRzZWxlY3QiLCJpZCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwiX3RoaXMxMiIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJQYWdlTWFuYWdlciIsIiRlbGVtZW50IiwiJHN0YXRlIiwiaW5pdEZvcm1WYWxpZGF0aW9uIiwiYmluZFN0YXRlQ291bnRyeUNoYW5nZSIsImJpbmRFc3RpbWF0b3JFdmVudHMiLCJzaGlwcGluZ1ZhbGlkYXRvciIsIm5vZCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsImJpbmRWYWxpZGF0aW9uIiwiYmluZFN0YXRlVmFsaWRhdGlvbiIsImJpbmRVUFNSYXRlcyIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsImNvdW50cnlJZCIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0IiwicGF5bG9hZCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ047QUFDdUI7QUFDTjtBQUNaO0FBQ047QUFDVjtBQUNZO0FBQUEsSUFFckJBLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDTixJQUFJLENBQUNDLFlBQVksR0FBR0MsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0lBQzVDLElBQUksQ0FBQ0MsYUFBYSxHQUFHRCxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxXQUFXLEdBQUdGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQyxJQUFJLENBQUNHLFFBQVEsR0FBR0gsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQzNDSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWI7SUFDQSxJQUFJLENBQUNDLFFBQVEsR0FBRyxrQkFBa0I7SUFDbEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxnQkFBZ0I7O0lBRTFDO0lBQ0EsSUFBSSxDQUFDQyxpQkFBaUIsR0FBRyxzQkFBc0I7O0lBRS9DO0lBQ0EsSUFBSSxDQUFDQyxLQUFLLEdBQUdSLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUNqQyxJQUFJLENBQUNTLFFBQVEsR0FBR1QsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNsQyxJQUFJLENBQUNVLGNBQWMsR0FBR1YsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQzNDLElBQUksQ0FBQ1csU0FBUyxHQUFHWCxDQUFDLENBQUNZLFFBQVEsQ0FBQztJQUU1QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBRWpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUFBbEIsTUFBQSxDQUVEaUIsVUFBVSxHQUFWLFNBQUFBLFdBQUEsRUFBYTtJQUNULElBQUksQ0FBQ0UsS0FBSyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRyxFQUFFO0lBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLENBQUM7RUFDeEI7O0VBRUE7RUFBQTtFQUFBckIsTUFBQSxDQUNBc0IsVUFBVSxHQUFWLFNBQUFBLFdBQUEsRUFBYTtJQUFBLElBQUFDLEtBQUE7SUFDVCxJQUFJLElBQUksQ0FBQ0YsV0FBVyxHQUFHLElBQUksQ0FBQ0YsS0FBSyxDQUFDSyxNQUFNLEVBQUU7TUFDdENwQixDQUFDLENBQUMsSUFBSSxDQUFDTSxrQkFBa0IsQ0FBQyxDQUFDZSxJQUFJLGlCQUFlLElBQUksQ0FBQ04sS0FBSyxDQUFDLElBQUksQ0FBQ0UsV0FBVyxDQUFDLENBQUNLLEtBQUssc0JBQW1CLENBQUM7TUFDcEdDLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQ0UsV0FBVyxDQUFDLENBQUNTLEdBQUcsRUFBRTtRQUNoREMsUUFBUSxFQUFFO01BQ2QsQ0FBQyxFQUFFLFVBQUNDLEdBQUcsRUFBSztRQUNSLElBQUlBLEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSUMsS0FBSyxDQUFDRCxHQUFHLENBQUM7UUFDeEI7O1FBRUE7UUFDQVQsS0FBSSxDQUFDRixXQUFXLEVBQUU7UUFDbEJFLEtBQUksQ0FBQ0QsVUFBVSxDQUFDLENBQUM7TUFDckIsQ0FBQyxDQUFDO0lBQ047O0lBRUE7SUFDQSxJQUFJLElBQUksQ0FBQ0QsV0FBVyxLQUFLLElBQUksQ0FBQ0YsS0FBSyxDQUFDSyxNQUFNLEVBQUU7TUFDeEMsSUFBSSxDQUFDVixjQUFjLENBQUNOLElBQUksQ0FBQyxDQUFDO01BRTFCLElBQUksSUFBSSxDQUFDMEIsVUFBVSxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUNBLFVBQVUsS0FBS0MsU0FBUyxFQUFFO1FBQ3pEbkIsUUFBUSxDQUFDb0IsUUFBUSxDQUFDQyxJQUFJLDhDQUE0QyxJQUFJLENBQUNILFVBQVk7TUFDdkYsQ0FBQyxNQUFNO1FBQ0hsQixRQUFRLENBQUNvQixRQUFRLENBQUNDLElBQUksR0FBRyxlQUFlO01BQzVDO01BQ0E7TUFDQTtJQUNKO0VBQ0osQ0FBQztFQUFBckMsTUFBQSxDQUVEc0MsV0FBVyxHQUFYLFNBQUFBLFlBQVlDLEtBQUssRUFBRUMsSUFBSSxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUNyQkYsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUV0QixJQUFJLENBQUM1QixjQUFjLENBQUM2QixJQUFJLENBQUMsQ0FBQztJQUUxQixJQUFNQyxPQUFPLEdBQUd4QyxDQUFDLENBQUNvQyxJQUFJLENBQUMsQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQztJQUMzQyxJQUFNcUMsV0FBVyxHQUFHRixPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNuQyxrQkFBa0IsQ0FBQztJQUV6RCxJQUFJLENBQUNPLFVBQVUsQ0FBQyxDQUFDOztJQUVqQjtJQUNBMkIsT0FBTyxDQUFDRyxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFQyxHQUFHLEVBQUs7TUFDekIsSUFBTUMsTUFBTSxHQUFHOUMsQ0FBQyxDQUFDNkMsR0FBRyxDQUFDO01BQ3JCLElBQU1FLEdBQUcsR0FBR0QsTUFBTSxDQUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUNPLEdBQUcsQ0FBQyxDQUFDO01BQzNDLElBQU0xQixLQUFLLEdBQUd3QixNQUFNLENBQUNMLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDUSxJQUFJLENBQUMsWUFBWSxDQUFDO01BQy9EWixNQUFJLENBQUNQLFVBQVUsR0FBRzlCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQ2dELEdBQUcsQ0FBQyxDQUFDO01BRXJDLElBQUlYLE1BQUksQ0FBQ1AsVUFBVSxLQUFLLEVBQUUsSUFBSU8sTUFBSSxDQUFDUCxVQUFVLEtBQUtDLFNBQVMsRUFBRTtRQUN6RE0sTUFBSSxDQUFDUCxVQUFVLG9CQUFrQk8sTUFBSSxDQUFDUCxVQUFZO01BQ3RELENBQUMsTUFBTTtRQUNITyxNQUFJLENBQUNQLFVBQVUsR0FBRyxFQUFFO01BQ3hCO01BRUEsSUFBTUosR0FBRyw0Q0FBMENxQixHQUFHLEdBQUdWLE1BQUksQ0FBQ1AsVUFBWTtNQUMxRU8sTUFBSSxDQUFDdEIsS0FBSyxDQUFDbUMsSUFBSSxDQUFDO1FBQ1p4QixHQUFHLEVBQUhBLEdBQUc7UUFDSG9CLE1BQU0sRUFBTkEsTUFBTTtRQUNOeEIsS0FBSyxFQUFMQTtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQzs7SUFFRjtJQUNBb0IsV0FBVyxDQUFDUyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQ1osSUFBSSxDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDckIsVUFBVSxDQUFDLENBQUM7RUFDckIsQ0FBQztFQUFBdEIsTUFBQSxDQUVEd0QsV0FBVyxHQUFYLFNBQUFBLFlBQVlqQixLQUFLLEVBQUU7SUFDZkEsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUV0QixJQUFNZSxLQUFLLEdBQUdDLG1FQUFZLENBQUMsQ0FBQztJQUU1Qi9CLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRTtNQUMzQkUsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxFQUFFLFVBQUNDLEdBQUcsRUFBRTJCLFFBQVEsRUFBSztNQUNsQixJQUFJM0IsR0FBRyxFQUFFO1FBQ0wsTUFBTSxJQUFJQyxLQUFLLENBQUNELEdBQUcsQ0FBQztNQUN4QjtNQUVBLElBQUkyQixRQUFRLENBQUNuQyxNQUFNLEVBQUU7UUFDakJpQyxLQUFLLENBQUNHLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDO1FBQzdCdkQsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDeUQsTUFBTSxDQUFDLENBQUM7TUFDL0I7SUFDSixDQUFDLENBQUM7SUFFRkosS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQztFQUNoQixDQUFDO0VBQUE5RCxNQUFBLENBRUQrRCxVQUFVLEdBQVYsU0FBQUEsV0FBV3hCLEtBQUssRUFBRTtJQUNkQSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0lBRXRCLElBQU1lLEtBQUssR0FBR0MsbUVBQVksQ0FBQyxDQUFDO0lBQzVCLElBQU1NLFFBQVEsR0FBRzVELENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ2dELEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLElBQU1hLFVBQVUsR0FBRzdELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDZ0QsR0FBRyxDQUFDLENBQUM7SUFDN0MsSUFBTWMsU0FBUyxHQUFHLDhDQUE4QztJQUVoRTlELENBQUMsQ0FBQytELElBQUksQ0FBQztNQUNIQyxNQUFNLEVBQUUsTUFBTTtNQUNkdEMsR0FBRyxFQUFFb0MsU0FBUztNQUNkRyxJQUFJLEVBQUU7UUFDRkMsWUFBWSxFQUFFTixRQUFRO1FBQ3RCTyxjQUFjLEVBQUVOLFVBQVU7UUFDMUJPLE1BQU0sRUFBRTtNQUNaO0lBQ0osQ0FBQyxDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFNO01BQ1Y5QyxrRUFBSyxDQUFDQyxHQUFHLENBQUNDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7UUFDL0JFLFFBQVEsRUFBRTtNQUNkLENBQUMsRUFBRSxVQUFDQyxHQUFHLEVBQUUyQixRQUFRLEVBQUs7UUFDbEIsSUFBSTNCLEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSUMsS0FBSyxDQUFDRCxHQUFHLENBQUM7UUFDeEI7UUFFQSxJQUFJMkIsUUFBUSxDQUFDbkMsTUFBTSxFQUFFO1VBQ2pCO1VBQ0FwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3FCLElBQUksQ0FBQ2tDLFFBQVEsQ0FBQztRQUN0QztRQUVBRixLQUFLLENBQUNpQixLQUFLLENBQUMsQ0FBQztNQUNqQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUExRSxNQUFBLENBRUQyRSxVQUFVLEdBQVYsU0FBQUEsV0FBV0MsT0FBTyxFQUFFO0lBQUEsSUFBQUMsTUFBQTtJQUNoQixJQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxJQUFNVSxHQUFHLEdBQUczRSxDQUFDLFdBQVMwRSxNQUFRLENBQUM7SUFDL0IsSUFBTUUsTUFBTSxHQUFHQyxRQUFRLENBQUNGLEdBQUcsQ0FBQzNCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3RDLElBQU04QixNQUFNLEdBQUdELFFBQVEsQ0FBQ0YsR0FBRyxDQUFDVixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3JELElBQU1jLE1BQU0sR0FBR0YsUUFBUSxDQUFDRixHQUFHLENBQUNWLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDckQsSUFBTWUsUUFBUSxHQUFHTCxHQUFHLENBQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUMvQyxJQUFNZ0IsUUFBUSxHQUFHTixHQUFHLENBQUNWLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUMvQyxJQUFNaUIsTUFBTSxHQUFHVixPQUFPLENBQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEdBQUdXLE1BQU0sR0FBRyxDQUFDLEdBQUdBLE1BQU0sR0FBRyxDQUFDO0lBQ3pFO0lBQ0EsSUFBSU0sTUFBTSxHQUFHSCxNQUFNLEVBQUU7TUFDakIsT0FBT0ksb0VBQUksQ0FBQztRQUNSaEMsSUFBSSxFQUFFNkIsUUFBUTtRQUNkSSxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU0sSUFBSU4sTUFBTSxHQUFHLENBQUMsSUFBSUksTUFBTSxHQUFHSixNQUFNLEVBQUU7TUFDdEMsT0FBT0ssb0VBQUksQ0FBQztRQUNSaEMsSUFBSSxFQUFFOEIsUUFBUTtRQUNkRyxJQUFJLEVBQUU7TUFDVixDQUFDLENBQUM7SUFDTjtJQUVBLElBQUksQ0FBQ2pGLFFBQVEsQ0FBQ29DLElBQUksQ0FBQyxDQUFDO0lBRXBCaEIsa0VBQUssQ0FBQ0MsR0FBRyxDQUFDNkQsSUFBSSxDQUFDQyxVQUFVLENBQUNaLE1BQU0sRUFBRVEsTUFBTSxFQUFFLFVBQUN0RCxHQUFHLEVBQUUyQixRQUFRLEVBQUs7TUFDekRrQixNQUFJLENBQUN0RSxRQUFRLENBQUNDLElBQUksQ0FBQyxDQUFDO01BRXBCLElBQUltRCxRQUFRLENBQUNVLElBQUksQ0FBQ3NCLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcEM7UUFDQSxJQUFNQyxNQUFNLEdBQUlOLE1BQU0sS0FBSyxDQUFFO1FBRTdCVCxNQUFJLENBQUNnQixjQUFjLENBQUNELE1BQU0sQ0FBQztNQUMvQixDQUFDLE1BQU07UUFDSGIsR0FBRyxDQUFDM0IsR0FBRyxDQUFDNEIsTUFBTSxDQUFDO1FBQ2ZPLG9FQUFJLENBQUM7VUFDRGhDLElBQUksRUFBRUksUUFBUSxDQUFDVSxJQUFJLENBQUNqRCxNQUFNLENBQUMwRSxJQUFJLENBQUMsSUFBSSxDQUFDO1VBQ3JDTixJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXhGLE1BQUEsQ0FFRCtGLHVCQUF1QixHQUF2QixTQUFBQSx3QkFBd0JuQixPQUFPLEVBQUVvQixNQUFNLEVBQVM7SUFBQSxJQUFBQyxNQUFBO0lBQUEsSUFBZkQsTUFBTTtNQUFOQSxNQUFNLEdBQUcsSUFBSTtJQUFBO0lBQzFDLElBQU1sQixNQUFNLEdBQUdGLE9BQU8sQ0FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMxQyxJQUFNVSxHQUFHLEdBQUczRSxDQUFDLFdBQVMwRSxNQUFRLENBQUM7SUFDL0IsSUFBTUssTUFBTSxHQUFHRixRQUFRLENBQUNGLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNyRCxJQUFNVyxNQUFNLEdBQUdnQixNQUFNLEtBQUssSUFBSSxHQUFHQSxNQUFNLEdBQUdiLE1BQU07SUFDaEQsSUFBTUcsTUFBTSxHQUFHTCxRQUFRLENBQUNpQixNQUFNLENBQUNuQixHQUFHLENBQUMzQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRTlDLElBQUkrQywwREFBUSxFQUFFO01BQ1YsSUFBSSxDQUFDdkIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDd0IsYUFBYSxDQUFDLENBQUMsRUFBRTtRQUM3QnhCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ3lCLGNBQWMsQ0FBQyxDQUFDO1FBQzNCO01BQ0o7SUFDSixDQUFDLE1BQU07TUFDSCxPQUFPZCxvRUFBSSxDQUFDO1FBQ1JoQyxJQUFJLG1EQUFpRHFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzBCLElBQUksTUFBRztRQUN2RWQsSUFBSSxFQUFFO01BQ1YsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJZSxZQUFZO0lBQ2hCO0lBQ0EsSUFBSWpCLE1BQU0sR0FBRyxDQUFDLElBQUlZLE1BQU0sQ0FBQ00sS0FBSyxDQUFDbEIsTUFBTSxDQUFDLEVBQUU7TUFDcENpQixZQUFZLEdBQUd4QixHQUFHLENBQUMzQixHQUFHLENBQUMsQ0FBQztNQUN4QjJCLEdBQUcsQ0FBQzNCLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQztNQUNmTyxvRUFBSSxDQUFDO1FBQ0RoQyxJQUFJLEVBQUtnRCxZQUFZLDBCQUF1QjtRQUM1Q2YsSUFBSSxFQUFFO01BQ1YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDakYsUUFBUSxDQUFDb0MsSUFBSSxDQUFDLENBQUM7TUFFcEJoQixrRUFBSyxDQUFDQyxHQUFHLENBQUM2RCxJQUFJLENBQUNDLFVBQVUsQ0FBQ1osTUFBTSxFQUFFUSxNQUFNLEVBQUUsVUFBQ3RELEdBQUcsRUFBRTJCLFFBQVEsRUFBSztRQUN6RHNDLE1BQUksQ0FBQzFGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7UUFFcEIsSUFBSW1ELFFBQVEsQ0FBQ1UsSUFBSSxDQUFDc0IsTUFBTSxLQUFLLFNBQVMsRUFBRTtVQUNwQztVQUNBLElBQU1DLE1BQU0sR0FBSU4sTUFBTSxLQUFLLENBQUU7VUFDN0JXLE1BQUksQ0FBQ0osY0FBYyxDQUFDRCxNQUFNLENBQUM7UUFDL0IsQ0FBQyxNQUFNO1VBQ0hiLEdBQUcsQ0FBQzNCLEdBQUcsQ0FBQzRCLE1BQU0sQ0FBQztVQUNmTyxvRUFBSSxDQUFDO1lBQ0RoQyxJQUFJLEVBQUVJLFFBQVEsQ0FBQ1UsSUFBSSxDQUFDakQsTUFBTSxDQUFDMEUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQ04sSUFBSSxFQUFFO1VBQ1YsQ0FBQyxDQUFDO1FBQ047TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUM7RUFBQXhGLE1BQUEsQ0FFRHlHLGNBQWMsR0FBZCxTQUFBQSxlQUFlM0IsTUFBTSxFQUFFO0lBQUEsSUFBQTRCLE1BQUE7SUFDbkIsSUFBSSxDQUFDbkcsUUFBUSxDQUFDb0MsSUFBSSxDQUFDLENBQUM7SUFDcEJoQixrRUFBSyxDQUFDQyxHQUFHLENBQUM2RCxJQUFJLENBQUNrQixVQUFVLENBQUM3QixNQUFNLEVBQUUsVUFBQzlDLEdBQUcsRUFBRTJCLFFBQVEsRUFBSztNQUNqRCxJQUFJQSxRQUFRLENBQUNVLElBQUksQ0FBQ3NCLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDcENlLE1BQUksQ0FBQ2IsY0FBYyxDQUFDLElBQUksQ0FBQztNQUM3QixDQUFDLE1BQU07UUFDSE4sb0VBQUksQ0FBQztVQUNEaEMsSUFBSSxFQUFFSSxRQUFRLENBQUNVLElBQUksQ0FBQ2pELE1BQU0sQ0FBQzBFLElBQUksQ0FBQyxJQUFJLENBQUM7VUFDckNOLElBQUksRUFBRTtRQUNWLENBQUMsQ0FBQyxDQUFDb0IsSUFBSSxDQUFDLFlBQU07VUFDVkYsTUFBSSxDQUFDYixjQUFjLENBQUMsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBN0YsTUFBQSxDQUVENkcsZUFBZSxHQUFmLFNBQUFBLGdCQUFnQi9CLE1BQU0sRUFBRTtJQUFBLElBQUFnQyxNQUFBO0lBQ3BCLElBQU1yRCxLQUFLLEdBQUdDLG1FQUFZLENBQUMsQ0FBQztJQUM1QixJQUFNcUQsT0FBTyxHQUFHO01BQ1poRixRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQwQixLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDO0lBRVpuQyxrRUFBSyxDQUFDQyxHQUFHLENBQUNvRixpQkFBaUIsQ0FBQ0MsZUFBZSxDQUFDbkMsTUFBTSxFQUFFaUMsT0FBTyxFQUFFLFVBQUMvRSxHQUFHLEVBQUUyQixRQUFRLEVBQUs7TUFDNUVGLEtBQUssQ0FBQ0csYUFBYSxDQUFDRCxRQUFRLENBQUN1RCxPQUFPLENBQUM7TUFFckNKLE1BQUksQ0FBQ0ssb0JBQW9CLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRnhGLGtFQUFLLENBQUN5RixLQUFLLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxVQUFDOUUsS0FBSyxFQUFFK0UsYUFBYSxFQUFLO01BQzlELElBQU1DLGNBQWMsR0FBR25ILENBQUMsQ0FBQ2tILGFBQWEsQ0FBQztNQUN2QyxJQUFNMUcsS0FBSyxHQUFHMkcsY0FBYyxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO01BQzVDLElBQU1DLE9BQU8sR0FBR3JILENBQUMsQ0FBQyxjQUFjLEVBQUVRLEtBQUssQ0FBQztNQUN4QyxJQUFNOEcsV0FBVyxHQUFHdEgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO01BQ3pDLElBQU11SCxJQUFJLEdBQUd2SCxDQUFDLENBQUMsa0JBQWtCLEVBQUVRLEtBQUssQ0FBQyxDQUFDeUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUV2RDFCLGtFQUFLLENBQUNDLEdBQUcsQ0FBQ29GLGlCQUFpQixDQUFDWSxZQUFZLENBQUNELElBQUksRUFBRS9HLEtBQUssQ0FBQ2lILFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBQzdGLEdBQUcsRUFBRThGLE1BQU0sRUFBSztRQUMvRSxJQUFNekQsSUFBSSxHQUFHeUQsTUFBTSxDQUFDekQsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUU5QixJQUFJckMsR0FBRyxFQUFFO1VBQ0x1RCxvRUFBSSxDQUFDO1lBQ0RoQyxJQUFJLEVBQUV2QixHQUFHO1lBQ1R3RCxJQUFJLEVBQUU7VUFDVixDQUFDLENBQUM7VUFDRixPQUFPLEtBQUs7UUFDaEI7UUFFQSxJQUFJbkIsSUFBSSxDQUFDMEQsa0JBQWtCLEVBQUU7VUFDekIzSCxDQUFDLENBQUMsb0JBQW9CLEVBQUVzSCxXQUFXLENBQUMsQ0FBQ25FLElBQUksQ0FBQ2MsSUFBSSxDQUFDMEQsa0JBQWtCLENBQUM7VUFDbEVOLE9BQU8sQ0FBQ08sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7VUFDOUJOLFdBQVcsQ0FBQy9FLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsTUFBTTtVQUNIOEUsT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztVQUMvQk4sV0FBVyxDQUFDbEgsSUFBSSxDQUFDLENBQUM7UUFDdEI7UUFFQSxJQUFJLENBQUM2RCxJQUFJLENBQUM0RCxXQUFXLElBQUksQ0FBQzVELElBQUksQ0FBQzZELE9BQU8sRUFBRTtVQUNwQ1QsT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQztRQUNsQyxDQUFDLE1BQU07VUFDSFAsT0FBTyxDQUFDTyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztRQUNuQztNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWhJLE1BQUEsQ0FFRDZGLGNBQWMsR0FBZCxTQUFBQSxlQUFlRCxNQUFNLEVBQUV1QyxLQUFLLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQzFCLElBQU1DLGNBQWMsR0FBR2pJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUNELFlBQVksQ0FBQztJQUM5RCxJQUFNbUksY0FBYyxHQUFHbEksQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ2xELElBQU0yRyxPQUFPLEdBQUc7TUFDWmhGLFFBQVEsRUFBRTtRQUNObUYsT0FBTyxFQUFFLGNBQWM7UUFDdkJxQixNQUFNLEVBQUUsYUFBYTtRQUNyQkMsU0FBUyxFQUFFLGlCQUFpQjtRQUM1QkMsY0FBYyxFQUFFO01BQ3BCO0lBQ0osQ0FBQztJQUVELElBQUksQ0FBQ2xJLFFBQVEsQ0FBQ29DLElBQUksQ0FBQyxDQUFDOztJQUVwQjtJQUNBLElBQUlpRCxNQUFNLElBQUl5QyxjQUFjLENBQUM3RyxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQ3ZDLE9BQU9rSCxNQUFNLENBQUN0RyxRQUFRLENBQUN1RyxNQUFNLENBQUMsQ0FBQztJQUNuQzs7SUFFQTtJQUNBLElBQUkvQyxNQUFNLElBQUl1QyxLQUFLLEVBQUU7TUFDakIsT0FBT08sTUFBTSxDQUFDdEcsUUFBUSxDQUFDdUcsTUFBTSxDQUFDLENBQUM7SUFDbkM7SUFFQWhILGtFQUFLLENBQUNDLEdBQUcsQ0FBQzZELElBQUksQ0FBQ21ELFVBQVUsQ0FBQzdCLE9BQU8sRUFBRSxVQUFDL0UsR0FBRyxFQUFFMkIsUUFBUSxFQUFLO01BQ2xEeUUsTUFBSSxDQUFDakksWUFBWSxDQUFDc0IsSUFBSSxDQUFDa0MsUUFBUSxDQUFDdUQsT0FBTyxDQUFDO01BQ3hDa0IsTUFBSSxDQUFDOUgsV0FBVyxDQUFDbUIsSUFBSSxDQUFDa0MsUUFBUSxDQUFDNEUsTUFBTSxDQUFDO01BQ3RDSCxNQUFJLENBQUMvSCxhQUFhLENBQUNvQixJQUFJLENBQUNrQyxRQUFRLENBQUM4RSxjQUFjLENBQUM7TUFFaERILGNBQWMsQ0FBQ08sV0FBVyxDQUFDbEYsUUFBUSxDQUFDNkUsU0FBUyxDQUFDO01BQzlDSixNQUFJLENBQUNsSCxVQUFVLENBQUMsQ0FBQztNQUNqQmtILE1BQUksQ0FBQzdILFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7TUFFcEIsSUFBTXNJLFFBQVEsR0FBRzFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRWdJLE1BQUksQ0FBQ2pJLFlBQVksQ0FBQyxDQUFDa0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7TUFDeEZqRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMySSxPQUFPLENBQUMsc0JBQXNCLEVBQUVELFFBQVEsQ0FBQztJQUN2RCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE5SSxNQUFBLENBRURnSixjQUFjLEdBQWQsU0FBQUEsZUFBQSxFQUFpQjtJQUFBLElBQUFDLE1BQUE7SUFDYixJQUFNQyxlQUFlLEdBQUcsR0FBRztJQUMzQixJQUFNdkUsVUFBVSxHQUFHd0Usa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUN6RSxVQUFVLEVBQUV1RSxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDN0UsSUFBTW5ELHVCQUF1QixHQUFHb0Qsa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUNyRCx1QkFBdUIsRUFBRW1ELGVBQWUsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUN2RyxJQUFNekMsY0FBYyxHQUFHMEMsa0RBQUEsQ0FBT0Msc0RBQUEsQ0FBVyxJQUFJLENBQUMzQyxjQUFjLEVBQUV5QyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDckYsSUFBSWxELE1BQU07O0lBRVY7SUFDQTVGLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUNELFlBQVksQ0FBQyxDQUFDa0gsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzVELElBQU1xQyxPQUFPLEdBQUd4RSxDQUFDLENBQUNtQyxLQUFLLENBQUMrRSxhQUFhLENBQUM7TUFFdEMvRSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBaUMsVUFBVSxDQUFDQyxPQUFPLENBQUM7SUFDdkIsQ0FBQyxDQUFDOztJQUVGO0lBQ0F4RSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDRCxZQUFZLENBQUMsQ0FBQ2tILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUMzREEsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUN0QjJHLHVEQUFPLDRCQUEwQkosTUFBSSxDQUFDSyxPQUFPLENBQUNDLE1BQU0sRUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDaEUzQyxJQUFJLENBQUNxQyxNQUFJLENBQUNwRCxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUMsQ0FBQzs7SUFFRjtJQUNBekYsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQ0QsWUFBWSxDQUFDLENBQUNrSCxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVNtQyxVQUFVQSxDQUFBLEVBQUc7TUFDM0V4RCxNQUFNLEdBQUcsSUFBSSxDQUFDeUQsS0FBSztJQUN2QixDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFVBQUFuSCxLQUFLLEVBQUk7TUFDZixJQUFNcUMsT0FBTyxHQUFHeEUsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDK0UsYUFBYSxDQUFDO01BQ3RDL0UsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUN0QkgsS0FBSyxDQUFDb0gsd0JBQXdCLENBQUMsQ0FBQzs7TUFFaEM7TUFDQTVELHVCQUF1QixDQUFDbkIsT0FBTyxFQUFFb0IsTUFBTSxDQUFDO0lBQzVDLENBQUMsQ0FBQztJQUVGNUYsQ0FBQyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUNELFlBQVksQ0FBQyxDQUFDa0gsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQ3REQSxLQUFLLENBQUNvSCx3QkFBd0IsQ0FBQyxDQUFDO01BQ2hDLElBQU03RSxNQUFNLEdBQUcxRSxDQUFDLENBQUNtQyxLQUFLLENBQUMrRSxhQUFhLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUM7TUFDeEQsSUFBTXVGLE1BQU0sR0FBR3hKLENBQUMsQ0FBQ21DLEtBQUssQ0FBQytFLGFBQWEsQ0FBQyxDQUFDakQsSUFBSSxDQUFDLGVBQWUsQ0FBQztNQUMzRGtCLG9FQUFJLENBQUM7UUFDRGhDLElBQUksRUFBRXFHLE1BQU07UUFDWnBFLElBQUksRUFBRSxTQUFTO1FBQ2ZxRSxnQkFBZ0IsRUFBRTtNQUN0QixDQUFDLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxZQUFNO1FBQ1Y7UUFDQUgsY0FBYyxDQUFDM0IsTUFBTSxDQUFDO01BQzFCLENBQUMsQ0FBQztNQUNGdkMsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRnRDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUNELFlBQVksQ0FBQyxDQUFDa0gsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzFELElBQU11QyxNQUFNLEdBQUcxRSxDQUFDLENBQUNtQyxLQUFLLENBQUMrRSxhQUFhLENBQUMsQ0FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUM7TUFFdEQ5QixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BQ3RCO01BQ0F1RyxNQUFJLENBQUNwQyxlQUFlLENBQUMvQixNQUFNLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBOUUsTUFBQSxDQUVEOEosbUJBQW1CLEdBQW5CLFNBQUFBLG9CQUFBLEVBQXNCO0lBQUEsSUFBQUMsTUFBQTtJQUNsQixJQUFNQyxnQkFBZ0IsR0FBRzVKLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDMUMsSUFBTTZKLFdBQVcsR0FBRzdKLENBQUMsQ0FBQyxjQUFjLENBQUM7SUFDckMsSUFBTThKLFVBQVUsR0FBRzlKLENBQUMsQ0FBQyxxQkFBcUIsRUFBRTZKLFdBQVcsQ0FBQztJQUV4RDdKLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDaUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQ3ZDQSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BRXRCdEMsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDK0UsYUFBYSxDQUFDLENBQUM5RyxJQUFJLENBQUMsQ0FBQztNQUM3QndKLGdCQUFnQixDQUFDckgsSUFBSSxDQUFDLENBQUM7TUFDdkJ2QyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQ3VDLElBQUksQ0FBQyxDQUFDO01BQy9CdUgsVUFBVSxDQUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDLENBQUM7SUFFRjNJLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzFDQSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BRXRCc0gsZ0JBQWdCLENBQUN4SixJQUFJLENBQUMsQ0FBQztNQUN2QkosQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDO01BQy9CSixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3VDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQztJQUVGc0gsV0FBVyxDQUFDNUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzlCLElBQU00SCxJQUFJLEdBQUdELFVBQVUsQ0FBQzlHLEdBQUcsQ0FBQyxDQUFDO01BRTdCYixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDOztNQUV0QjtNQUNBLElBQUksQ0FBQ3lILElBQUksRUFBRTtRQUNQLE9BQU81RSxvRUFBSSxDQUFDO1VBQ1JoQyxJQUFJLEVBQUUyRyxVQUFVLENBQUM3RixJQUFJLENBQUMsT0FBTyxDQUFDO1VBQzlCbUIsSUFBSSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ047TUFFQTdELGtFQUFLLENBQUNDLEdBQUcsQ0FBQzZELElBQUksQ0FBQzJFLFNBQVMsQ0FBQ0QsSUFBSSxFQUFFLFVBQUNuSSxHQUFHLEVBQUUyQixRQUFRLEVBQUs7UUFDOUMsSUFBSUEsUUFBUSxDQUFDVSxJQUFJLENBQUNzQixNQUFNLEtBQUssU0FBUyxFQUFFO1VBQ3BDb0UsTUFBSSxDQUFDbEUsY0FBYyxDQUFDLENBQUM7UUFDekIsQ0FBQyxNQUFNO1VBQ0hOLG9FQUFJLENBQUM7WUFDRGhDLElBQUksRUFBRUksUUFBUSxDQUFDVSxJQUFJLENBQUNqRCxNQUFNLENBQUMwRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JDTixJQUFJLEVBQUU7VUFDVixDQUFDLENBQUM7UUFDTjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXhGLE1BQUEsQ0FFRHFLLHlCQUF5QixHQUF6QixTQUFBQSwwQkFBQSxFQUE0QjtJQUFBLElBQUFDLE9BQUE7SUFDeEIsSUFBTUMsY0FBYyxHQUFHbkssQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ2xELElBQU1vSyxTQUFTLEdBQUdwSyxDQUFDLENBQUMsNkJBQTZCLENBQUM7SUFDbEQsSUFBTXFLLFVBQVUsR0FBR3JLLENBQUMsQ0FBQyxtQkFBbUIsRUFBRW9LLFNBQVMsQ0FBQztJQUVwRHBLLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDaUgsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzVDQSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BQ3RCdEMsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDK0UsYUFBYSxDQUFDLENBQUNvRCxNQUFNLENBQUMsQ0FBQztNQUMvQkgsY0FBYyxDQUFDRyxNQUFNLENBQUMsQ0FBQztNQUN2QnRLLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDc0ssTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDO0lBRUZ0SyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUMvQ0EsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUN0QjZILGNBQWMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDdkJ0SyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3NLLE1BQU0sQ0FBQyxDQUFDO01BQ25DdEssQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNzSyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRkYsU0FBUyxDQUFDbkQsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBOUUsS0FBSyxFQUFJO01BQzVCLElBQU00SCxJQUFJLEdBQUdNLFVBQVUsQ0FBQ3JILEdBQUcsQ0FBQyxDQUFDO01BRTdCYixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQUksQ0FBQ2lJLGtGQUFhLENBQUNSLElBQUksQ0FBQyxFQUFFO1FBQ3RCLE9BQU81RSxvRUFBSSxDQUFDO1VBQ1JoQyxJQUFJLEVBQUVrSCxVQUFVLENBQUNwRyxJQUFJLENBQUMsT0FBTyxDQUFDO1VBQzlCbUIsSUFBSSxFQUFFO1FBQ1YsQ0FBQyxDQUFDO01BQ047TUFFQTdELGtFQUFLLENBQUNDLEdBQUcsQ0FBQzZELElBQUksQ0FBQ21GLG9CQUFvQixDQUFDVCxJQUFJLEVBQUUsVUFBQ25JLEdBQUcsRUFBRTZJLElBQUksRUFBSztRQUNyRCxJQUFJQSxJQUFJLENBQUN4RyxJQUFJLENBQUNzQixNQUFNLEtBQUssU0FBUyxFQUFFO1VBQ2hDMkUsT0FBSSxDQUFDekUsY0FBYyxDQUFDLENBQUM7UUFDekIsQ0FBQyxNQUFNO1VBQ0hOLG9FQUFJLENBQUM7WUFDRGhDLElBQUksRUFBRXNILElBQUksQ0FBQ3hHLElBQUksQ0FBQ2pELE1BQU0sQ0FBQzBFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakNOLElBQUksRUFBRTtVQUNWLENBQUMsQ0FBQztRQUNOO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeEYsTUFBQSxDQUVEOEssc0JBQXNCLEdBQXRCLFNBQUFBLHVCQUFBLEVBQXlCO0lBQUEsSUFBQUMsT0FBQTtJQUNyQixJQUFNdEgsS0FBSyxHQUFHQyxtRUFBWSxDQUFDLENBQUM7SUFFNUJ0RCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUMzQyxJQUFNdUMsTUFBTSxHQUFHMUUsQ0FBQyxDQUFDbUMsS0FBSyxDQUFDK0UsYUFBYSxDQUFDLENBQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDO01BQzFELElBQU0wQyxPQUFPLEdBQUc7UUFDWmhGLFFBQVEsRUFBRTtNQUNkLENBQUM7TUFFRFEsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUV0QmUsS0FBSyxDQUFDSyxJQUFJLENBQUMsQ0FBQztNQUVabkMsa0VBQUssQ0FBQ0MsR0FBRyxDQUFDNkQsSUFBSSxDQUFDdUYsMEJBQTBCLENBQUNsRyxNQUFNLEVBQUVpQyxPQUFPLEVBQUUsVUFBQy9FLEdBQUcsRUFBRTJCLFFBQVEsRUFBSztRQUMxRUYsS0FBSyxDQUFDRyxhQUFhLENBQUNELFFBQVEsQ0FBQ3VELE9BQU8sQ0FBQztRQUVyQzZELE9BQUksQ0FBQzVELG9CQUFvQixDQUFDLENBQUM7TUFDL0IsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBbkgsTUFBQSxDQUVEbUgsb0JBQW9CLEdBQXBCLFNBQUFBLHFCQUFBLEVBQXVCO0lBQ25CL0csQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNpSCxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUE5RSxLQUFLLEVBQUk7TUFDNUMsSUFBTTBJLE9BQU8sR0FBRzdLLENBQUMsQ0FBQ21DLEtBQUssQ0FBQytFLGFBQWEsQ0FBQztNQUN0QyxJQUFNNEQsRUFBRSxHQUFHRCxPQUFPLENBQUM3SCxHQUFHLENBQUMsQ0FBQztNQUN4QixJQUFNSixLQUFLLEdBQUdpSSxPQUFPLENBQUM1RyxJQUFJLENBQUMsT0FBTyxDQUFDO01BRW5DLElBQUksQ0FBQzZHLEVBQUUsRUFBRTtRQUNMO01BQ0o7TUFFQSxJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQ3BJLElBQUksbUJBQWlCcUksRUFBRSxNQUFHLENBQUMsQ0FBQzdHLElBQUksQ0FBQyxjQUFjLENBQUM7TUFFN0VqRSxDQUFDLDBCQUF3QjRDLEtBQU8sQ0FBQyxDQUFDeEMsSUFBSSxDQUFDLENBQUM7TUFDeENKLENBQUMsMEJBQXdCNEMsS0FBSyxTQUFJa0ksRUFBSSxDQUFDLENBQUN2SSxJQUFJLENBQUMsQ0FBQztNQUU5QyxJQUFJd0ksWUFBWSxFQUFFO1FBQ2QvSyxDQUFDLDRCQUEwQjRDLEtBQU8sQ0FBQyxDQUFDTCxJQUFJLENBQUMsQ0FBQztNQUM5QyxDQUFDLE1BQU07UUFDSHZDLENBQUMsNEJBQTBCNEMsS0FBTyxDQUFDLENBQUN4QyxJQUFJLENBQUMsQ0FBQztNQUM5QztJQUNKLENBQUMsQ0FBQztJQUVGSixDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJJLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFM0MsU0FBU3FDLFdBQVdBLENBQUEsRUFBRztNQUNuQixJQUFNM0IsS0FBSyxHQUFHckosQ0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUNnRCxHQUFHLENBQUMsQ0FBQztNQUNsRSxJQUFNaUksV0FBVyxHQUFHakwsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO01BQzdDLElBQU1rTCxVQUFVLEdBQUdsTCxDQUFDLENBQUMsd0JBQXdCLENBQUM7TUFFOUMsSUFBSXFKLEtBQUssS0FBSyxNQUFNLEVBQUU7UUFDbEI0QixXQUFXLENBQUMxSSxJQUFJLENBQUMsQ0FBQztRQUNsQjJJLFVBQVUsQ0FBQzlLLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNINkssV0FBVyxDQUFDN0ssSUFBSSxDQUFDLENBQUM7UUFDbEI4SyxVQUFVLENBQUMzSSxJQUFJLENBQUMsQ0FBQztNQUNyQjtJQUNKO0lBRUF2QyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUrRCxXQUFXLENBQUM7SUFFbkRBLFdBQVcsQ0FBQyxDQUFDO0VBQ2pCLENBQUM7RUFBQXBMLE1BQUEsQ0FFRGtCLFVBQVUsR0FBVixTQUFBQSxXQUFBLEVBQWE7SUFBQSxJQUFBcUssT0FBQTtJQUNULElBQUksQ0FBQ3ZDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ2MsbUJBQW1CLENBQUMsQ0FBQztJQUMxQixJQUFJLENBQUNnQixzQkFBc0IsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ1QseUJBQXlCLENBQUMsQ0FBQztJQUVoQyxJQUFJLENBQUN6SixLQUFLLENBQUN5RyxFQUFFLENBQUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFVBQUE5RSxLQUFLLEVBQUk7TUFDaERnSixPQUFJLENBQUNqSixXQUFXLENBQUNDLEtBQUssRUFBRWdKLE9BQUksQ0FBQzNLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLFFBQVEsQ0FBQ3dHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUMvQmdKLE9BQUksQ0FBQy9ILFdBQVcsQ0FBQ2pCLEtBQUssQ0FBQztJQUMzQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUN4QixTQUFTLENBQUNzRyxFQUFFLENBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFVBQUE5RSxLQUFLLEVBQUk7TUFDOURnSixPQUFJLENBQUN4SCxVQUFVLENBQUN4QixLQUFLLENBQUM7SUFDMUIsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSSxDQUFDaUosaUJBQWlCLEdBQUcsSUFBSUMsZ0VBQWlCLENBQUNyTCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQztFQUNsRixDQUFDO0VBQUEsT0FBQVQsSUFBQTtBQUFBLEVBemtCNkIrTCxxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVk07QUFDbkI7QUFDZTtBQUNHO0FBQ1Q7QUFBQSxJQUVwQkQsaUJBQWlCO0VBQ2xDLFNBQUFBLGtCQUFZRSxRQUFRLEVBQUU7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7SUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUd4TCxDQUFDLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDdUwsUUFBUSxDQUFDO0lBQzNELElBQUksQ0FBQ0Usa0JBQWtCLENBQUMsQ0FBQztJQUN6QixJQUFJLENBQUNDLHNCQUFzQixDQUFDLENBQUM7SUFDN0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQzlCO0VBQUMsSUFBQS9MLE1BQUEsR0FBQXlMLGlCQUFBLENBQUF4TCxTQUFBO0VBQUFELE1BQUEsQ0FFRDZMLGtCQUFrQixHQUFsQixTQUFBQSxtQkFBQSxFQUFxQjtJQUFBLElBQUF0SyxLQUFBO0lBQ2pCLElBQUksQ0FBQ2lLLGlCQUFpQixHQUFHLCtCQUErQjtJQUN4RCxJQUFJLENBQUNRLGlCQUFpQixHQUFHQywyREFBRyxDQUFDO01BQ3pCekgsTUFBTSxFQUFLLElBQUksQ0FBQ2dILGlCQUFpQjtJQUNyQyxDQUFDLENBQUM7SUFFRnBMLENBQUMsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUN1TCxRQUFRLENBQUMsQ0FBQ3RFLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUMvRDtNQUNBO01BQ0E7TUFDQSxJQUFJbkMsQ0FBQyxDQUFJbUIsS0FBSSxDQUFDaUssaUJBQWlCLHVDQUFrQyxDQUFDLENBQUNwSSxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3RFN0IsS0FBSSxDQUFDeUssaUJBQWlCLENBQUNFLFlBQVksQ0FBQyxDQUFDO01BQ3pDO01BRUEsSUFBSTNLLEtBQUksQ0FBQ3lLLGlCQUFpQixDQUFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDeEM7TUFDSjtNQUVBNUosS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMwSixjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLG1CQUFtQixDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUN2QixDQUFDO0VBQUF0TSxNQUFBLENBRURvTSxjQUFjLEdBQWQsU0FBQUEsZUFBQSxFQUFpQjtJQUNiLElBQUksQ0FBQ0osaUJBQWlCLENBQUNPLEdBQUcsQ0FBQyxDQUN2QjtNQUNJQyxRQUFRLEVBQUssSUFBSSxDQUFDaEIsaUJBQWlCLHVDQUFrQztNQUNyRWlCLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUV0SixHQUFHLEVBQUs7UUFDbkIsSUFBTXVKLFNBQVMsR0FBR3pHLE1BQU0sQ0FBQzlDLEdBQUcsQ0FBQztRQUM3QixJQUFNMEUsTUFBTSxHQUFHNkUsU0FBUyxLQUFLLENBQUMsSUFBSSxDQUFDekcsTUFBTSxDQUFDTSxLQUFLLENBQUNtRyxTQUFTLENBQUM7UUFFMURELEVBQUUsQ0FBQzVFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDhFLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQ0osQ0FBQztFQUNOLENBQUM7RUFBQTVNLE1BQUEsQ0FFRHFNLG1CQUFtQixHQUFuQixTQUFBQSxvQkFBQSxFQUFzQjtJQUFBLElBQUE1SixNQUFBO0lBQ2xCLElBQUksQ0FBQ3VKLGlCQUFpQixDQUFDTyxHQUFHLENBQUMsQ0FDdkI7TUFDSUMsUUFBUSxFQUFFcE0sQ0FBQyxDQUFJLElBQUksQ0FBQ29MLGlCQUFpQixxQ0FBZ0MsQ0FBQztNQUN0RWlCLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUs7UUFDZCxJQUFJNUUsTUFBTTtRQUVWLElBQU0rRSxJQUFJLEdBQUd6TSxDQUFDLENBQUlxQyxNQUFJLENBQUMrSSxpQkFBaUIscUNBQWdDLENBQUM7UUFFekUsSUFBSXFCLElBQUksQ0FBQ3JMLE1BQU0sRUFBRTtVQUNiLElBQU1zTCxNQUFNLEdBQUdELElBQUksQ0FBQ3pKLEdBQUcsQ0FBQyxDQUFDO1VBRXpCMEUsTUFBTSxHQUFHZ0YsTUFBTSxJQUFJQSxNQUFNLENBQUN0TCxNQUFNLElBQUlzTCxNQUFNLEtBQUssZ0JBQWdCO1FBQ25FO1FBRUFKLEVBQUUsQ0FBQzVFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDhFLFlBQVksRUFBRTtJQUNsQixDQUFDLENBQ0osQ0FBQztFQUNOOztFQUVBO0FBQ0o7QUFDQSxLQUZJO0VBQUE1TSxNQUFBLENBR0FzTSxZQUFZLEdBQVosU0FBQUEsYUFBQSxFQUFlO0lBQ1gsSUFBTVMsYUFBYSxHQUFHLCtCQUErQjtJQUVyRDNNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUwRixhQUFhLEVBQUUsVUFBQ3hLLEtBQUssRUFBSztNQUM1QyxJQUFNeUssaUJBQWlCLEdBQUc1TSxDQUFDLENBQUMsc0JBQXNCLENBQUM7TUFDbkQsSUFBTTZNLHFCQUFxQixHQUFHN00sQ0FBQyxDQUFDLDBCQUEwQixDQUFDO01BRTNEbUMsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUV0QnNLLGlCQUFpQixDQUFDRSxXQUFXLENBQUMsa0JBQWtCLENBQUM7TUFDakRELHFCQUFxQixDQUFDQyxXQUFXLENBQUMsa0JBQWtCLENBQUM7SUFDekQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBbE4sTUFBQSxDQUVEOEwsc0JBQXNCLEdBQXRCLFNBQUFBLHVCQUFBLEVBQXlCO0lBQUEsSUFBQWpILE1BQUE7SUFDckIsSUFBSXNJLEtBQUs7O0lBRVQ7SUFDQUMscUVBQVksQ0FBQyxJQUFJLENBQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDdEMsT0FBTyxFQUFFO01BQUUrRCxjQUFjLEVBQUU7SUFBSyxDQUFDLEVBQUUsVUFBQ3JMLEdBQUcsRUFBRXNMLEtBQUssRUFBSztNQUM5RSxJQUFJdEwsR0FBRyxFQUFFO1FBQ0x1RCxtRUFBSSxDQUFDO1VBQ0RoQyxJQUFJLEVBQUV2QixHQUFHO1VBQ1R3RCxJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7UUFFRixNQUFNLElBQUl2RCxLQUFLLENBQUNELEdBQUcsQ0FBQztNQUN4QjtNQUVBLElBQU11TCxNQUFNLEdBQUduTixDQUFDLENBQUNrTixLQUFLLENBQUM7TUFFdkIsSUFBSXpJLE1BQUksQ0FBQ21ILGlCQUFpQixDQUFDd0IsU0FBUyxDQUFDM0ksTUFBSSxDQUFDK0csTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQy9EL0csTUFBSSxDQUFDbUgsaUJBQWlCLENBQUNwRyxNQUFNLENBQUNmLE1BQUksQ0FBQytHLE1BQU0sQ0FBQztNQUM5QztNQUVBLElBQUl1QixLQUFLLEVBQUU7UUFDUHRJLE1BQUksQ0FBQ21ILGlCQUFpQixDQUFDcEcsTUFBTSxDQUFDdUgsS0FBSyxDQUFDO01BQ3hDO01BRUEsSUFBSUksTUFBTSxDQUFDRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDckJOLEtBQUssR0FBR0csS0FBSztRQUNiekksTUFBSSxDQUFDd0gsbUJBQW1CLENBQUMsQ0FBQztNQUM5QixDQUFDLE1BQU07UUFDSGtCLE1BQU0sQ0FBQ2xLLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7UUFDNUNxSyw2REFBVSxDQUFDQyxzQkFBc0IsQ0FBQ0wsS0FBSyxDQUFDO01BQzVDOztNQUVBO01BQ0E7TUFDQTtNQUNBbE4sQ0FBQyxDQUFDeUUsTUFBSSxDQUFDMkcsaUJBQWlCLENBQUMsQ0FBQzNJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDK0ssV0FBVyxDQUFDLHFCQUFxQixDQUFDO0lBQzdGLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTVOLE1BQUEsQ0FFRCtMLG1CQUFtQixHQUFuQixTQUFBQSxvQkFBQSxFQUFzQjtJQUNsQixJQUFNOEIsbUJBQW1CLEdBQUd6TixDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDcEQsSUFBTTBOLGNBQWMsR0FBRzFOLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUUzQzBOLGNBQWMsQ0FBQ3pHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUNqQyxJQUFNd0wsTUFBTSxHQUFHO1FBQ1hDLFVBQVUsRUFBRTVOLENBQUMsQ0FBQywyQkFBMkIsRUFBRTBOLGNBQWMsQ0FBQyxDQUFDMUssR0FBRyxDQUFDLENBQUM7UUFDaEU2SyxRQUFRLEVBQUU3TixDQUFDLENBQUMseUJBQXlCLEVBQUUwTixjQUFjLENBQUMsQ0FBQzFLLEdBQUcsQ0FBQyxDQUFDO1FBQzVEOEssSUFBSSxFQUFFOU4sQ0FBQyxDQUFDLHdCQUF3QixFQUFFME4sY0FBYyxDQUFDLENBQUMxSyxHQUFHLENBQUMsQ0FBQztRQUN2RCtLLFFBQVEsRUFBRS9OLENBQUMsQ0FBQyx1QkFBdUIsRUFBRTBOLGNBQWMsQ0FBQyxDQUFDMUssR0FBRyxDQUFDO01BQzdELENBQUM7TUFFRGIsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUV0QmYsa0VBQUssQ0FBQ0MsR0FBRyxDQUFDNkQsSUFBSSxDQUFDMkksaUJBQWlCLENBQUNMLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxVQUFDL0wsR0FBRyxFQUFFMkIsUUFBUSxFQUFLO1FBQ2hGdkQsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNxQixJQUFJLENBQUNrQyxRQUFRLENBQUN1RCxPQUFPLENBQUM7O1FBRTVDO1FBQ0E5RyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQWdILFVBQVUsRUFBSTtVQUNsRCxJQUFNQyxPQUFPLEdBQUdsTyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2dELEdBQUcsQ0FBQyxDQUFDO1VBRWxEaUwsVUFBVSxDQUFDM0wsY0FBYyxDQUFDLENBQUM7VUFFM0JmLGtFQUFLLENBQUNDLEdBQUcsQ0FBQzZELElBQUksQ0FBQzhJLG1CQUFtQixDQUFDRCxPQUFPLEVBQUUsWUFBTTtZQUM5QzVGLE1BQU0sQ0FBQ3RHLFFBQVEsQ0FBQ3VHLE1BQU0sQ0FBQyxDQUFDO1VBQzVCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztJQUVGdkksQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNpSCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUE5RSxLQUFLLEVBQUk7TUFDOUNBLEtBQUssQ0FBQ0csY0FBYyxDQUFDLENBQUM7TUFFdEJ0QyxDQUFDLENBQUNtQyxLQUFLLENBQUMrRSxhQUFhLENBQUMsQ0FBQzlHLElBQUksQ0FBQyxDQUFDO01BQzdCcU4sbUJBQW1CLENBQUNELFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztNQUNuRHhOLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDdUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0lBR0Z2QyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2lILEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQTlFLEtBQUssRUFBSTtNQUM5Q0EsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUV0Qm1MLG1CQUFtQixDQUFDVyxRQUFRLENBQUMsa0JBQWtCLENBQUM7TUFDaERwTyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3VDLElBQUksQ0FBQyxDQUFDO01BQ25DdkMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNJLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBaUwsaUJBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNyTEw7QUFBZSx5RUFBVWdELElBQUksRUFBRTtFQUMzQixJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDMUIsT0FBTyxLQUFLO0VBQ2hCOztFQUVBO0VBQ0EsT0FBTyxJQUFJO0FBQ2YsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFlLFNBQVNwRixPQUFPQSxDQUFDdkgsR0FBRyxFQUFFc0MsTUFBTSxFQUFFc0ssT0FBTyxFQUFFO0VBQ2xELE9BQU9DLEtBQUssQ0FBQzdNLEdBQUcsRUFBRTtJQUNkc0MsTUFBTSxFQUFOQSxNQUFNO0lBQ053SyxXQUFXLEVBQUUsYUFBYTtJQUMxQkMsT0FBTyxFQUFFO01BQ0wsY0FBYyxFQUFFO0lBQ3BCLENBQUM7SUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FBTztFQUNoQyxDQUFDLENBQUMsQ0FBQzlILElBQUksQ0FBQyxVQUFBakQsUUFBUTtJQUFBLE9BQUlBLFFBQVE7RUFBQSxFQUFDO0FBQ2pDLEM7Ozs7Ozs7Ozs7OztBQ1RBO0FBQWUsMkVBQVk7RUFDdkIsSUFBSXNMLEtBQUssR0FBR2pPLFFBQVEsQ0FBQ2tPLGFBQWEsQ0FBQyxPQUFPLENBQUM7RUFDM0MsT0FBTyxPQUFPRCxLQUFLLENBQUM1SSxjQUFjLEtBQUssVUFBVTtBQUNyRCxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBcUM7O0FBRXJDO0FBQ0E4SSxrREFBVSxDQUFDQyxXQUFXLENBQUM7RUFDbkJDLGNBQWMsRUFBRSxLQUFLO0VBQ3JCQyxrQkFBa0IsRUFBRSxRQUFRO0VBQzVCQyxpQkFBaUIsRUFBRTtBQUN2QixDQUFDLENBQUM7O0FBRUY7QUFDZUosaUhBQVUsRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgc3dhbCBmcm9tICcuL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgYXBpQ2FsbCBmcm9tICcuL2YvYXBpJztcbmltcG9ydCB2YWxpZGl0eSBmcm9tICcuL2YvY2hlY2stdmFsaWRpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5jYXJ0LWl0ZW0tdGl0bGUnO1xuICAgICAgICB0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSA9ICcubGlzdC1mZWVkYmFjayc7XG5cbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdsaXN0LWFkZF9fcm93LS1lcnJvcic7XG5cbiAgICAgICAgLy8gRnVuY3Rpb25hbCBhc3NpZ25tZW50c1xuICAgICAgICB0aGlzLiRmb3JtID0gJCgnLmNhcnQtbGlzdC1mb3JtJyk7XG4gICAgICAgIHRoaXMuJG5ld0xpc3QgPSAkKCcuYWRkLW5ldy1saXN0Jyk7XG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZy1vdmVybGF5Jyk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG5cbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb29wID0gMDtcbiAgICB9XG5cbiAgICAvLyBSdW4gQUpBWCBjYWxscyBvbmUgYnkgb25lXG4gICAgaGFuZGxlQWpheCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkuaHRtbChgU2F2aW5nPGJyPiAke3RoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0ucG5hbWV9PGJyPiB0byB5b3VyIGxpc3RgKTtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9hZGQtdG8tbGlzdC1yZXNwb25zZScsXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgJ2N1cnJlbnQnIGFuZCBydW4gQUpBWCBjYWxsIGFnYWluXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9vcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXN0IGF0dGVtcHQsIHJlZGlyZWN0IG9ubHlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLiRhZGRpbmdPdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFRhcmdldCAhPT0gJycgJiYgdGhpcy5saXN0VGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gYC93aXNobGlzdC5waHA/YWN0aW9uPXZpZXd3aXNobGlzdGl0ZW1zJHt0aGlzLmxpc3RUYXJnZXR9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICcvd2lzaGxpc3QucGhwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICQoJy5tdWx0aV9hZGRfX2NhcnQtYnV0dG9uJykuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xuICAgICAgICAgICAgLy8gJCgnLm11bHRpLWFkZF9fcm93W2RhdGEtc3RhdHVzPXN1Y2Nlc3NdJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzRm9ybShldmVudCwgZm9ybSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMuJGFkZGluZ092ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIGNvbnN0IGFsbFJvd3MgPSAkKGZvcm0pLmZpbmQodGhpcy5jbGFzc1Jvdyk7XG4gICAgICAgIGNvbnN0IGFsbE1lc3NhZ2VzID0gYWxsUm93cy5maW5kKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgICAgICAvLyBGb3IgZWFjaCByb3csIGFkZCB0aGUgVVJMIGFuZCB0YXJnZXQgdG8gdGhlIGl0ZW1zIGFycmF5XG4gICAgICAgIGFsbFJvd3MuZWFjaCgoaW5kZXgsIHJvdykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gJChyb3cpO1xuICAgICAgICAgICAgY29uc3QgcGlkID0gdGFyZ2V0LmZpbmQoJ1tkYXRhLXBpZF0nKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IHBuYW1lID0gdGFyZ2V0LmZpbmQoJy5jYXJ0LWl0ZW0tbmFtZScpLmF0dHIoJ2RhdGEtcG5hbWUnKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFRhcmdldCA9ICQoJyNsaXN0LWlkJykudmFsKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RUYXJnZXQgIT09ICcnICYmIHRoaXMubGlzdFRhcmdldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VGFyZ2V0ID0gYCZ3aXNobGlzdGlkPSR7dGhpcy5saXN0VGFyZ2V0fWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdFRhcmdldCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBgL3dpc2hsaXN0LnBocD9hY3Rpb249YWRkJnByb2R1Y3RfaWQ9JHtwaWR9JHt0aGlzLmxpc3RUYXJnZXR9YDtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgICAgICBwbmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgYWxsTWVzc2FnZXMudGV4dCgnU2F2aW5nIHRvIGxpc3QuLi4nKS5zaG93KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgIH1cblxuICAgIG9wZW5BZGRMaXN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSgnL2NhcnQucGhwJywge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2NhcnQvYWRkLWxpc3QtZm9ybScsXG4gICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAkKCcjd2lzaGxpc3RuYW1lJykuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICB9XG5cbiAgICBhZGROZXdMaXN0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSAkKCcjd2lzaGxpc3RuYW1lJykudmFsKCk7XG4gICAgICAgIGNvbnN0IHNoYXJlZExpc3QgPSAkKCcjcHVibGljd2lzaGxpc3QnKS52YWwoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0VXJsID0gJy93aXNobGlzdC5waHA/YWN0aW9uPWFkZHdpc2hsaXN0JnByb2R1Y3RfaWQ9JztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IHRhcmdldFVybCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICB3aXNobGlzdG5hbWU6IGxpc3ROYW1lLFxuICAgICAgICAgICAgICAgIHB1YmxpY3dpc2hsaXN0OiBzaGFyZWRMaXN0LFxuICAgICAgICAgICAgICAgIHN1Ym1pdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLmRvbmUoKCkgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UoJy93aXNobGlzdC5waHAnLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2IyYi9saXN0LWFkZGVkLXJlc3BvbnNlJyxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgY29udGVudHMgb2YgJy5saXN0LXNlbGVjdG9yJyB3aXRoIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICQoJy5saXN0LXNlbGVjdG9yJykuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHBhcnNlSW50KCRlbC52YWwoKSwgMTApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHktbWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5LW1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5LW1pbi1lcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eS1tYXgtZXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycgPyBvbGRRdHkgKyAxIDogb2xkUXR5IC0gMTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGlmeSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCA9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0LWl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHktbWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xuXG4gICAgICAgIGlmICh2YWxpZGl0eSkge1xuICAgICAgICAgICAgaWYgKCEkdGFyZ2V0WzBdLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgICR0YXJnZXRbMF0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogYFBsZWFzZSBlbnRlciBhIHZhbGlkIHF1YW50aXR5IChtdWx0aXBsZXMgb2YgJHskdGFyZ2V0WzBdLnN0ZXB9KWAsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICBpZiAobmV3UXR5IDwgMCB8fCBOdW1iZXIuaXNOYU4obmV3UXR5KSkge1xuICAgICAgICAgICAgaW52YWxpZEVudHJ5ID0gJGVsLnZhbCgpO1xuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogYCR7aW52YWxpZEVudHJ5fSBpcyBub3QgYSB2YWxpZCBlbnRyeWAsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2NvbmZpZ3VyZS1wcm9kdWN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCAoZXZlbnQsIGN1cnJlbnRUYXJnZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJGNoYW5nZWRPcHRpb24ucGFyZW50cygnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9ICQoJ1tuYW1lPVwiaXRlbV9pZFwiXScsICRmb3JtKS5hdHRyKCd2YWx1ZScpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKGl0ZW0sICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0LmRhdGEgfHwge307XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSwgZW1wdHkpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcbiAgICAgICAgaWYgKHJlbW92ZSAmJiBlbXB0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcblxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydC1xdWFudGl0eScpIHx8IDA7XG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBsZXQgcHJlVmFsO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNsZWFyIGNhcnRcbiAgICAgICAgJCgnW2RhdGEtY2FydC1jbGVhcl0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFwaUNhbGwoYC9hcGkvc3RvcmVmcm9udC9jYXJ0cy8ke3RoaXMuY29udGV4dC5jYXJ0SWR9YCwgJ0RFTEVURScsIHt9KVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSwgdHJ1ZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmluZyA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY29uZmlybURlbGV0ZScpO1xuICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxuICAgICAgICAgICAgdGhpcy5jYXJ0RWRpdE9wdGlvbnMoaXRlbUlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZFByb21vQ29kZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xuICAgICAgICBjb25zdCAkY291cG9uRm9ybSA9ICQoJy5jb3Vwb24tZm9ybScpO1xuICAgICAgICBjb25zdCAkY29kZUlucHV0ID0gJCgnW25hbWU9XCJjb3Vwb25jb2RlXCJdJywgJGNvdXBvbkZvcm0pO1xuXG4gICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuc2hvdygpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNvZGVJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRW1wdHkgY29kZVxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY29kZUlucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5Q29kZShjb2RlLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmFwcGx5R2lmdENlcnRpZmljYXRlKGNvZGUsIChlcnIsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCAnW2RhdGEtc2F2ZS1jYXJ0XScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Zvcm0oZXZlbnQsIHRoaXMuJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRuZXdMaXN0Lm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbkFkZExpc3QoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRkb2N1bWVudC5vbignY2xpY2snLCAnLmFkZC1uZXctbGlzdC1mb3JtIC5idXR0b24nLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld0xpc3QoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4uL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ0NvdW50cnlcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVWYWwgJiYgZWxlVmFsLmxlbmd0aCAmJiBlbGVWYWwgIT09ICdTdGF0ZS9wcm92aW5jZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmdldFN0YXR1cyh0aGlzLiRzdGF0ZSkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSgkbGFzdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgJGxhc3QgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1N0YXRlL3Byb3ZpbmNlJyk7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiB5b3UgY2hhbmdlIGEgY291bnRyeSwgeW91IHN3YXAgdGhlIHN0YXRlL3Byb3ZpbmNlIGJldHdlZW4gYW4gaW5wdXQgYW5kIGEgc2VsZWN0IGRyb3Bkb3duXG4gICAgICAgICAgICAvLyBOb3QgYWxsIGNvdW50cmllcyByZXF1aXJlIHRoZSBwcm92aW5jZSB0byBiZSBmaWxsZWRcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gcmVtb3ZlIHRoaXMgY2xhc3Mgd2hlbiB3ZSBzd2FwIHNpbmNlIG5vZCB2YWxpZGF0aW9uIGRvZXNuJ3QgY2xlYW51cCBmb3IgdXNcbiAgICAgICAgICAgICQodGhpcy5zaGlwcGluZ0VzdGltYXRvcikuZmluZCgnLmZvcm0tZmllbGQtLXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnZm9ybS1maWVsZC0tc3VjY2VzcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXN0aW1hdG9yRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkZXN0aW1hdG9yQ29udGFpbmVyID0gJCgnLnNoaXBwaW5nLWVzdGltYXRvcicpO1xuICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybSA9ICQoJy5lc3RpbWF0b3ItZm9ybScpO1xuXG4gICAgICAgICRlc3RpbWF0b3JGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY291bnRyeV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHN0YXRlX2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIGNpdHk6ICQoJ1tuYW1lPVwic2hpcHBpbmctY2l0eVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICB6aXBfY29kZTogJCgnW25hbWU9XCJzaGlwcGluZy16aXBcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRTaGlwcGluZ1F1b3RlcyhwYXJhbXMsICdjYXJ0L3NoaXBwaW5nLXF1b3RlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnNoaXBwaW5nLXF1b3RlcycpLmh0bWwocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBiaW5kIHRoZSBzZWxlY3QgYnV0dG9uXG4gICAgICAgICAgICAgICAgJCgnLnNlbGVjdC1zaGlwcGluZy1xdW90ZScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBxdW90ZUlkID0gJCgnLnNoaXBwaW5nLXF1b3RlOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjbGlja0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuc3VibWl0U2hpcHBpbmdRdW90ZShxdW90ZUlkLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkZXN0aW1hdG9yQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLnNob3coKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5oaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwaUNhbGwodXJsLCBtZXRob2QsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dC5yZXBvcnRWYWxpZGl0eSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsImltcG9ydCBzd2VldEFsZXJ0IGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuLy8gU2V0IGRlZmF1bHRzIGZvciBzd2VldGFsZXJ0MiBwb3B1cCBib3hlc1xuc3dlZXRBbGVydC5zZXREZWZhdWx0cyh7XG4gICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgIGNvbmZpcm1CdXR0b25DbGFzczogJ2J1dHRvbicsXG4gICAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdidXR0b24nLFxufSk7XG5cbi8vIFJlLWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgc3dlZXRBbGVydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=