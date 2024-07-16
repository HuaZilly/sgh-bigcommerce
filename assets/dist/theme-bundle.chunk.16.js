(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/f/multiadd.js":
/*!***************************************!*\
  !*** ./assets/js/theme/f/multiadd.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_5__);



function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Page = /*#__PURE__*/function (_PageManager) {
  function Page() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Page, _PageManager);
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    // Classes
    this.classRow = '.multi-add__row';
    this.classResultMessage = '.multi-add__result';
    this.classAddButton = '.multi-add__add-button';
    this.classRemoveButton = '.multi-add__remove-button';

    // Class names
    this.classNameRowError = 'multi-add__row--error';

    // Functional assignments
    this.$form = $('.multi-add');
    this.$file = $('.csv-file');
    this.snippet = $(this.classRow)[0].outerHTML;
    this.lines = 1;
    this.searchTerms = [];
    this.resetState();
    this.bindEvents();
  };
  _proto.resetState = function resetState() {
    this.items = [];
    this.errors = [];
    this.currentLoop = 0;
  }

  // Loop errors, add class and change text
  ;
  _proto.handleErrors = function handleErrors() {
    var _this2 = this;
    $(this.errors).each(function (i, element) {
      element.addClass(_this2.classNameRowError);
      // To add lang string
      element.children(_this2.classResultMessage).text('Please complete the SKU and Quantity fields');
    });
  }

  // Run AJAX calls one by one
  ;
  _proto.handleAjax = function handleAjax() {
    var _this3 = this;
    if (this.currentLoop < this.items.length) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.getPage(this.items[this.currentLoop].url, {
        template: 'f/b2b/quick-add-response'
      }, function (err, response) {
        var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var cleanResponse = response.replace(scriptRegex, '').trim();
        if (err) {
          throw new Error(err);
        }
        if (cleanResponse.length) {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text(cleanResponse);
          $(_this3.items[_this3.currentLoop].target).addClass('multi-add__row--advisory');
        } else {
          _this3.items[_this3.currentLoop].target.children(_this3.classResultMessage).text($('.multi-add__submit-button').data('message'));
          $(_this3.items[_this3.currentLoop].target).attr('data-status', 'success').addClass('multi-add__row--success');
        }

        // Increment 'current' and run AJAX call again
        _this3.currentLoop++;
        _this3.handleErrors();
        _this3.handleAjax();
      });
    }

    // Last attempt, redirect only
    if (this.currentLoop === this.items.length) {
      // document.location.href = '/cart.php';
      this.fetchCounter();
      $('.multi_add__cart-button').css('display', 'inline-block');
    }
  };
  _proto.fetchCounter = function fetchCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent({
      template: 'f/cart/item-count'
    }, function (err, response) {
      if (response > 0) {
        $('body').trigger('cart-quantity-update', response);
      }
    });
  };
  _proto.handleButtonDisplay = function handleButtonDisplay() {
    var rows = this.$form.children(this.classRow);
    var removeButtons = rows.find(this.classRemoveButton);
    var addButtons = rows.find(this.classAddButton);
    var lastAddButton = $(rows[this.lines - 1]).find(this.classAddButton);
    if (this.lines > 1) {
      removeButtons.removeClass('multi-add__remove-button--last').removeAttr('disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled', 'disabled');
      addButtons.not(lastAddButton).addClass('multi-add__add-button--disabled').attr('disabled', 'disabled');
    } else {
      removeButtons.addClass('multi-add__remove-button--last').attr('disabled', 'disabled');
      addButtons.removeClass('multi-add__add-button--disabled').removeAttr('disabled');
    }
  };
  _proto.handleAddLine = function handleAddLine(sku, qty) {
    var newLine = $(this.snippet).clone();
    if (sku && qty) {
      $(newLine[0].children[0]).val(sku);
      $(newLine[0].children[1]).val(qty);
    }
    $('.multi-add__submit-button').before(newLine);
    this.lines++;
    this.handleButtonDisplay();
  };
  _proto.handleRemoveLine = function handleRemoveLine(line) {
    if (line.is(':only-of-type')) {
      return;
    }
    line.remove();
    this.lines--;
    this.handleButtonDisplay();
  };
  _proto.handleItemSelect = function handleItemSelect(event, override) {
    var self = event ? $(event.target) : override;
    var relativeRow = self.parents('.multi-add__row');
    var rowIndex = relativeRow.index() - 1;
    var selectedSku = $.trim(self.text());
    var relativeInput = relativeRow.find('[data-multi-sku]');
    relativeInput[0].value = selectedSku;
    this.searchTerms[rowIndex] = selectedSku;
  };
  _proto.processForm = function processForm(event, form) {
    var _this4 = this;
    event.preventDefault();
    var allRows = $(form).children(this.classRow);
    var allMessages = allRows.find(this.classResultMessage);
    this.resetState();

    // For each row, add the URL and target to the items array
    allRows.each(function (index, row) {
      var target = $(row);
      var sku = target.find('[data-multi-sku]').val();
      var qty = target.find('[data-multi-qty]').val();
      if (!sku || !qty) {
        _this4.errors.push(target);
        return;
      }
      var url = "/cart.php?action=add&sku=" + sku + "&qty=" + qty;
      _this4.items.push({
        url: url,
        target: target
      });
    });

    // To add lang string
    allMessages.text('Adding to basket');
    this.handleAjax();
  };
  _proto.parseCSV = function parseCSV(event, _this) {
    $('.alertBox-message span').text('');
    $('.alertBox').hide();
    var file = event.target.files[0];
    var noSku;
    var noQty;
    Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(file, {
      preview: 1,
      complete: function complete(results) {
        if (results.data[0].indexOf('sku') === -1) {
          noSku = true;
        }
        if (results.data[0].indexOf('qty') === -1) {
          noQty = true;
        }
        if (noQty || noSku) {
          if (noSku) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "sku" in row 1.');
          }
          if (noQty) {
            $('.alertBox-message span').append(' Please ensure you have a heading labeled "qty" in row 1.');
          }
          $('.alertBox').show();
        } else {
          Object(papaparse__WEBPACK_IMPORTED_MODULE_5__["parse"])(file, {
            header: true,
            dynamicTyping: false,
            skipEmptyLines: true,
            step: function step(row) {
              var sku = row.data[0].sku;
              var qty = row.data[0].qty;
              _this.handleAddLine(sku, qty);
            }
          });
        }
      }
    });
  }

  // Bind event handlers
  ;
  _proto.bindEvents = function bindEvents() {
    var _this5 = this;
    this.$form.on('click', this.classAddButton, function () {
      _this5.handleAddLine();
    });
    this.$form.on('click', this.classRemoveButton, function (event) {
      _this5.handleRemoveLine($(event.target).parent());
    });
    this.$form.on('change', '[data-multi-sku]', function (event) {
      var self = $(event.target);
      if (self.val()) {
        self.siblings(_this5.classResultMessage).text('');
        self.parent().removeClass(_this5.classNameRowError);
      }
    });
    this.$form.on('submit', function (event) {
      _this5.processForm(event, _this5.$form[0]);
    });
    this.$file.on('change', function (event) {
      _this5.parseCSV(event, _this5);
    });
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9tdWx0aWFkZC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjbGFzc1JvdyIsImNsYXNzUmVzdWx0TWVzc2FnZSIsImNsYXNzQWRkQnV0dG9uIiwiY2xhc3NSZW1vdmVCdXR0b24iLCJjbGFzc05hbWVSb3dFcnJvciIsIiRmb3JtIiwiJCIsIiRmaWxlIiwic25pcHBldCIsIm91dGVySFRNTCIsImxpbmVzIiwic2VhcmNoVGVybXMiLCJyZXNldFN0YXRlIiwiYmluZEV2ZW50cyIsIml0ZW1zIiwiZXJyb3JzIiwiY3VycmVudExvb3AiLCJoYW5kbGVFcnJvcnMiLCJfdGhpczIiLCJlYWNoIiwiaSIsImVsZW1lbnQiLCJhZGRDbGFzcyIsImNoaWxkcmVuIiwidGV4dCIsImhhbmRsZUFqYXgiLCJfdGhpczMiLCJsZW5ndGgiLCJ1dGlscyIsImFwaSIsImdldFBhZ2UiLCJ1cmwiLCJ0ZW1wbGF0ZSIsImVyciIsInJlc3BvbnNlIiwic2NyaXB0UmVnZXgiLCJjbGVhblJlc3BvbnNlIiwicmVwbGFjZSIsInRyaW0iLCJFcnJvciIsInRhcmdldCIsImRhdGEiLCJhdHRyIiwiZmV0Y2hDb3VudGVyIiwiY3NzIiwiY2FydCIsImdldENvbnRlbnQiLCJ0cmlnZ2VyIiwiaGFuZGxlQnV0dG9uRGlzcGxheSIsInJvd3MiLCJyZW1vdmVCdXR0b25zIiwiZmluZCIsImFkZEJ1dHRvbnMiLCJsYXN0QWRkQnV0dG9uIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyIiwibm90IiwiaGFuZGxlQWRkTGluZSIsInNrdSIsInF0eSIsIm5ld0xpbmUiLCJjbG9uZSIsInZhbCIsImJlZm9yZSIsImhhbmRsZVJlbW92ZUxpbmUiLCJsaW5lIiwiaXMiLCJyZW1vdmUiLCJoYW5kbGVJdGVtU2VsZWN0IiwiZXZlbnQiLCJvdmVycmlkZSIsInNlbGYiLCJyZWxhdGl2ZVJvdyIsInBhcmVudHMiLCJyb3dJbmRleCIsImluZGV4Iiwic2VsZWN0ZWRTa3UiLCJyZWxhdGl2ZUlucHV0IiwidmFsdWUiLCJwcm9jZXNzRm9ybSIsImZvcm0iLCJfdGhpczQiLCJwcmV2ZW50RGVmYXVsdCIsImFsbFJvd3MiLCJhbGxNZXNzYWdlcyIsInJvdyIsInB1c2giLCJwYXJzZUNTViIsIl90aGlzIiwiaGlkZSIsImZpbGUiLCJmaWxlcyIsIm5vU2t1Iiwibm9RdHkiLCJwYXJzZSIsInByZXZpZXciLCJjb21wbGV0ZSIsInJlc3VsdHMiLCJpbmRleE9mIiwiYXBwZW5kIiwic2hvdyIsImhlYWRlciIsImR5bmFtaWNUeXBpbmciLCJza2lwRW1wdHlMaW5lcyIsInN0ZXAiLCJfdGhpczUiLCJvbiIsInBhcmVudCIsInNpYmxpbmdzIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNLO0FBQ2I7QUFBQSxJQUViQSxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ047SUFDQSxJQUFJLENBQUNDLFFBQVEsR0FBRyxpQkFBaUI7SUFDakMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxvQkFBb0I7SUFDOUMsSUFBSSxDQUFDQyxjQUFjLEdBQUcsd0JBQXdCO0lBQzlDLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsMkJBQTJCOztJQUVwRDtJQUNBLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsdUJBQXVCOztJQUVoRDtJQUNBLElBQUksQ0FBQ0MsS0FBSyxHQUFHQyxDQUFDLENB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QUFJK0IsSUFBSSxDQUFDVCxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ1pTLElBQUksQ0FBQ3FDLFFBQVEsQ0FBQ0gsTUFBSSxDQUFDeEcsa0JBQWtCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0MrQyxJQUFJLENBQUNvQyxNQUFNLENBQUMsQ0FBQyxDQUFDckQsV0FBVyxDQUFDbUQsTUFBSSxDQUFDckcsaUJBQWlCLENBQUM7TUFDckQ7SUFDSixDQUFDLENBQUM7SUFFRixJQUFJLENBQUNDLEtBQUssQ0FBQ3FHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQXJDLEtBQUssRUFBSTtNQUM3Qm9DLE1BQUksQ0FBQzFCLFdBQVcsQ0FBQ1YsS0FBSyxFQUFFb0MsTUFBSSxDQUFDcEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ0UsS0FBSyxDQUFDbUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBckMsS0FBSyxFQUFJO01BQzdCb0MsTUFBSSxDQUFDbEIsUUFBUSxDQUFDbEIsS0FBSyxFQUFFb0MsTUFBSSxDQUFDO0lBQzlCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBakgsSUFBQTtBQUFBLEVBMU82QnFILHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAncGFwYXBhcnNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICAvLyBDbGFzc2VzXG4gICAgICAgIHRoaXMuY2xhc3NSb3cgPSAnLm11bHRpLWFkZF9fcm93JztcbiAgICAgICAgdGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UgPSAnLm11bHRpLWFkZF9fcmVzdWx0JztcbiAgICAgICAgdGhpcy5jbGFzc0FkZEJ1dHRvbiA9ICcubXVsdGktYWRkX19hZGQtYnV0dG9uJztcbiAgICAgICAgdGhpcy5jbGFzc1JlbW92ZUJ1dHRvbiA9ICcubXVsdGktYWRkX19yZW1vdmUtYnV0dG9uJztcblxuICAgICAgICAvLyBDbGFzcyBuYW1lc1xuICAgICAgICB0aGlzLmNsYXNzTmFtZVJvd0Vycm9yID0gJ211bHRpLWFkZF9fcm93LS1lcnJvcic7XG5cbiAgICAgICAgLy8gRnVuY3Rpb25hbCBhc3NpZ25tZW50c1xuICAgICAgICB0aGlzLiRmb3JtID0gJCgnLm11bHRpLWFkZCcpO1xuICAgICAgICB0aGlzLiRmaWxlID0gJCgnLmNzdi1maWxlJyk7XG4gICAgICAgIHRoaXMuc25pcHBldCA9ICQodGhpcy5jbGFzc1JvdylbMF0ub3V0ZXJIVE1MO1xuICAgICAgICB0aGlzLmxpbmVzID0gMTtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtcyA9IFtdO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudExvb3AgPSAwO1xuICAgIH1cblxuICAgIC8vIExvb3AgZXJyb3JzLCBhZGQgY2xhc3MgYW5kIGNoYW5nZSB0ZXh0XG4gICAgaGFuZGxlRXJyb3JzKCkge1xuICAgICAgICAkKHRoaXMuZXJyb3JzKS5lYWNoKChpLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKHRoaXMuY2xhc3NOYW1lUm93RXJyb3IpO1xuICAgICAgICAgICAgLy8gVG8gYWRkIGxhbmcgc3RyaW5nXG4gICAgICAgICAgICBlbGVtZW50LmNoaWxkcmVuKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS50ZXh0KCdQbGVhc2UgY29tcGxldGUgdGhlIFNLVSBhbmQgUXVhbnRpdHkgZmllbGRzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJ1biBBSkFYIGNhbGxzIG9uZSBieSBvbmVcbiAgICBoYW5kbGVBamF4KCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9vcCA8IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnZi9iMmIvcXVpY2stYWRkLXJlc3BvbnNlJyxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0UmVnZXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhblJlc3BvbnNlID0gcmVzcG9uc2UucmVwbGFjZShzY3JpcHRSZWdleCwgJycpLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0LmNoaWxkcmVuKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS50ZXh0KGNsZWFuUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0KS5hZGRDbGFzcygnbXVsdGktYWRkX19yb3ctLWFkdmlzb3J5Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS50YXJnZXQuY2hpbGRyZW4odGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpLnRleHQoJCgnLm11bHRpLWFkZF9fc3VibWl0LWJ1dHRvbicpLmRhdGEoJ21lc3NhZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS50YXJnZXQpLmF0dHIoJ2RhdGEtc3RhdHVzJywgJ3N1Y2Nlc3MnKS5hZGRDbGFzcygnbXVsdGktYWRkX19yb3ctLXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnQgJ2N1cnJlbnQnIGFuZCBydW4gQUpBWCBjYWxsIGFnYWluXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TG9vcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExhc3QgYXR0ZW1wdCwgcmVkaXJlY3Qgb25seVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50TG9vcCA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnL2NhcnQucGhwJztcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb3VudGVyKCk7XG4gICAgICAgICAgICAkKCcubXVsdGlfYWRkX19jYXJ0LWJ1dHRvbicpLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoQ291bnRlcigpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudCh7IHRlbXBsYXRlOiAnZi9jYXJ0L2l0ZW0tY291bnQnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVCdXR0b25EaXNwbGF5KCkge1xuICAgICAgICBjb25zdCByb3dzID0gdGhpcy4kZm9ybS5jaGlsZHJlbih0aGlzLmNsYXNzUm93KTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9ucyA9IHJvd3MuZmluZCh0aGlzLmNsYXNzUmVtb3ZlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgYWRkQnV0dG9ucyA9IHJvd3MuZmluZCh0aGlzLmNsYXNzQWRkQnV0dG9uKTtcbiAgICAgICAgY29uc3QgbGFzdEFkZEJ1dHRvbiA9ICQocm93c1t0aGlzLmxpbmVzIC0gMV0pLmZpbmQodGhpcy5jbGFzc0FkZEJ1dHRvbik7XG5cbiAgICAgICAgaWYgKHRoaXMubGluZXMgPiAxKSB7XG4gICAgICAgICAgICByZW1vdmVCdXR0b25zLnJlbW92ZUNsYXNzKCdtdWx0aS1hZGRfX3JlbW92ZS1idXR0b24tLWxhc3QnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgYWRkQnV0dG9ucy5yZW1vdmVDbGFzcygnbXVsdGktYWRkX19hZGQtYnV0dG9uLS1kaXNhYmxlZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBhZGRCdXR0b25zLm5vdChsYXN0QWRkQnV0dG9uKS5hZGRDbGFzcygnbXVsdGktYWRkX19hZGQtYnV0dG9uLS1kaXNhYmxlZCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVCdXR0b25zLmFkZENsYXNzKCdtdWx0aS1hZGRfX3JlbW92ZS1idXR0b24tLWxhc3QnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgYWRkQnV0dG9ucy5yZW1vdmVDbGFzcygnbXVsdGktYWRkX19hZGQtYnV0dG9uLS1kaXNhYmxlZCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBZGRMaW5lKHNrdSwgcXR5KSB7XG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSAkKHRoaXMuc25pcHBldCkuY2xvbmUoKTtcblxuICAgICAgICBpZiAoc2t1ICYmIHF0eSkge1xuICAgICAgICAgICAgJChuZXdMaW5lWzBdLmNoaWxkcmVuWzBdKS52YWwoc2t1KTtcbiAgICAgICAgICAgICQobmV3TGluZVswXS5jaGlsZHJlblsxXSkudmFsKHF0eSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcubXVsdGktYWRkX19zdWJtaXQtYnV0dG9uJykuYmVmb3JlKG5ld0xpbmUpO1xuICAgICAgICB0aGlzLmxpbmVzKys7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCdXR0b25EaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3ZlTGluZShsaW5lKSB7XG4gICAgICAgIGlmIChsaW5lLmlzKCc6b25seS1vZi10eXBlJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmUucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMubGluZXMtLTtcblxuICAgICAgICB0aGlzLmhhbmRsZUJ1dHRvbkRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJdGVtU2VsZWN0KGV2ZW50LCBvdmVycmlkZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gKGV2ZW50KSA/ICQoZXZlbnQudGFyZ2V0KSA6IG92ZXJyaWRlO1xuICAgICAgICBjb25zdCByZWxhdGl2ZVJvdyA9IHNlbGYucGFyZW50cygnLm11bHRpLWFkZF9fcm93Jyk7XG4gICAgICAgIGNvbnN0IHJvd0luZGV4ID0gcmVsYXRpdmVSb3cuaW5kZXgoKSAtIDE7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRTa3UgPSAkLnRyaW0oc2VsZi50ZXh0KCkpO1xuICAgICAgICBjb25zdCByZWxhdGl2ZUlucHV0ID0gcmVsYXRpdmVSb3cuZmluZCgnW2RhdGEtbXVsdGktc2t1XScpO1xuXG4gICAgICAgIHJlbGF0aXZlSW5wdXRbMF0udmFsdWUgPSBzZWxlY3RlZFNrdTtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtc1tyb3dJbmRleF0gPSBzZWxlY3RlZFNrdTtcbiAgICB9XG5cbiAgICBwcm9jZXNzRm9ybShldmVudCwgZm9ybSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGFsbFJvd3MgPSAkKGZvcm0pLmNoaWxkcmVuKHRoaXMuY2xhc3NSb3cpO1xuICAgICAgICBjb25zdCBhbGxNZXNzYWdlcyA9IGFsbFJvd3MuZmluZCh0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSk7XG5cbiAgICAgICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICAgICAgLy8gRm9yIGVhY2ggcm93LCBhZGQgdGhlIFVSTCBhbmQgdGFyZ2V0IHRvIHRoZSBpdGVtcyBhcnJheVxuICAgICAgICBhbGxSb3dzLmVhY2goKGluZGV4LCByb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICQocm93KTtcbiAgICAgICAgICAgIGNvbnN0IHNrdSA9IHRhcmdldC5maW5kKCdbZGF0YS1tdWx0aS1za3VdJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBxdHkgPSB0YXJnZXQuZmluZCgnW2RhdGEtbXVsdGktcXR5XScpLnZhbCgpO1xuXG4gICAgICAgICAgICBpZiAoIXNrdSB8fCAhcXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gYC9jYXJ0LnBocD9hY3Rpb249YWRkJnNrdT0ke3NrdX0mcXR5PSR7cXR5fWA7XG5cbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgYWxsTWVzc2FnZXMudGV4dCgnQWRkaW5nIHRvIGJhc2tldCcpO1xuICAgICAgICB0aGlzLmhhbmRsZUFqYXgoKTtcbiAgICB9XG5cbiAgICBwYXJzZUNTVihldmVudCwgX3RoaXMpIHtcbiAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2Ugc3BhbicpLnRleHQoJycpO1xuICAgICAgICAkKCcuYWxlcnRCb3gnKS5oaWRlKCk7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGxldCBub1NrdTtcbiAgICAgICAgbGV0IG5vUXR5O1xuXG4gICAgICAgIHBhcnNlKGZpbGUsIHtcbiAgICAgICAgICAgIHByZXZpZXc6IDEsXG4gICAgICAgICAgICBjb21wbGV0ZShyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdHMuZGF0YVswXS5pbmRleE9mKCdza3UnKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9Ta3UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGFbMF0uaW5kZXhPZigncXR5JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vUXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobm9RdHkgfHwgbm9Ta3UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vU2t1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZSBzcGFuJykuYXBwZW5kKCcgUGxlYXNlIGVuc3VyZSB5b3UgaGF2ZSBhIGhlYWRpbmcgbGFiZWxlZCBcInNrdVwiIGluIHJvdyAxLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub1F0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2Ugc3BhbicpLmFwcGVuZCgnIFBsZWFzZSBlbnN1cmUgeW91IGhhdmUgYSBoZWFkaW5nIGxhYmVsZWQgXCJxdHlcIiBpbiByb3cgMS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAkKCcuYWxlcnRCb3gnKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2UoZmlsZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pY1R5cGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAocm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2t1ID0gcm93LmRhdGFbMF0uc2t1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF0eSA9IHJvdy5kYXRhWzBdLnF0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVBZGRMaW5lKHNrdSwgcXR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEJpbmQgZXZlbnQgaGFuZGxlcnNcbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRmb3JtLm9uKCdjbGljaycsIHRoaXMuY2xhc3NBZGRCdXR0b24sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkTGluZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdjbGljaycsIHRoaXMuY2xhc3NSZW1vdmVCdXR0b24sIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlTGluZSgkKGV2ZW50LnRhcmdldCkucGFyZW50KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdjaGFuZ2UnLCAnW2RhdGEtbXVsdGktc2t1XScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSAkKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWJsaW5ncyh0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dCgnJyk7XG4gICAgICAgICAgICAgICAgc2VsZi5wYXJlbnQoKS5yZW1vdmVDbGFzcyh0aGlzLmNsYXNzTmFtZVJvd0Vycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRm9ybShldmVudCwgdGhpcy4kZm9ybVswXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZpbGUub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucGFyc2VDU1YoZXZlbnQsIHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9