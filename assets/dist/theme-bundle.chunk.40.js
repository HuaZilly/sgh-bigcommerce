(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

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

/***/ }),

/***/ "./assets/js/theme/page-manager.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/page-manager.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageManager; });
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

var PageManager = /*#__PURE__*/function () {
  function PageManager(context) {
    this.context = context;
  }
  var _proto = PageManager.prototype;
  _proto.type = function type() {
    return this.constructor.name;
  };
  _proto.onReady = function onReady() {};
  PageManager.load = function load(context) {
    var page = new this(context);
    $(document).ready(function () {
      page.onReady.bind(page)();
    });
  };
  return PageManager;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9tdWx0aWFkZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcGFnZS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNsYXNzUm93IiwiY2xhc3NSZXN1bHRNZXNzYWdlIiwiY2xhc3NBZGRCdXR0b24iLCJjbGFzc1JlbW92ZUJ1dHRvbiIsImNsYXNzTmFtZVJvd0Vycm9yIiwiJGZvcm0iLCIkIiwiJGZpbGUiLCJzbmlwcGV0Iiwib3V0ZXJIVE1MIiwibGluZXMiLCJzZWFyY2hUZXJtcyIsInJlc2V0U3RhdGUiLCJiaW5kRXZlbnRzIiwiaXRlbXMiLCJlcnJvcnMiLCJjdXJyZW50TG9vcCIsImhhbmRsZUVycm9ycyIsIl90aGlzMiIsImVhY2giLCJpIiwiZWxlbWVudCIsImFkZENsYXNzIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiaGFuZGxlQWpheCIsIl90aGlzMyIsImxlbmd0aCIsInV0aWxzIiwiYXBpIiwiZ2V0UGFnZSIsInVybCIsInRlbXBsYXRlIiwiZXJyIiwicmVzcG9uc2UiLCJzY3JpcHRSZWdleCIsImNsZWFuUmVzcG9uc2UiLCJyZXBsYWNlIiwidHJpbSIsIkVycm9yIiwidGFyZ2V0IiwiZGF0YSIsImF0dHIiLCJmZXRjaENvdW50ZXIiLCJjc3MiLCJjYXJ0IiwiZ2V0Q29udGVudCIsInRyaWdnZXIiLCJoYW5kbGVCdXR0b25EaXNwbGF5Iiwicm93cyIsInJlbW92ZUJ1dHRvbnMiLCJmaW5kIiwiYWRkQnV0dG9ucyIsImxhc3RBZGRCdXR0b24iLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJub3QiLCJoYW5kbGVBZGRMaW5lIiwic2t1IiwicXR5IiwibmV3TGluZSIsImNsb25lIiwidmFsIiwiYmVmb3JlIiwiaGFuZGxlUmVtb3ZlTGluZSIsImxpbmUiLCJpcyIsInJlbW92ZSIsImhhbmRsZUl0ZW1TZWxlY3QiLCJldmVudCIsIm92ZXJyaWRlIiwic2VsZiIsInJlbGF0aXZlUm93IiwicGFyZW50cyIsInJvd0luZGV4IiwiaW5kZXgiLCJzZWxlY3RlZFNrdSIsInJlbGF0aXZlSW5wdXQiLCJ2YWx1ZSIsInByb2Nlc3NGb3JtIiwiZm9ybSIsIl90aGlzNCIsInByZXZlbnREZWZhdWx0IiwiYWxsUm93cyIsImFsbE1lc3NhZ2VzIiwicm93IiwicHVzaCIsInBhcnNlQ1NWIiwiX3RoaXMiLCJoaWRlIiwiZmlsZSIsImZpbGVzIiwibm9Ta3UiLCJub1F0eSIsInBhcnNlIiwicHJldmlldyIsImNvbXBsZXRlIiwicmVzdWx0cyIsImluZGV4T2YiLCJhcHBlbmQiLCJzaG93IiwiaGVhZGVyIiwiZHluYW1pY1R5cGluZyIsInNraXBFbXB0eUxpbmVzIiwic3RlcCIsIl90aGlzNSIsIm9uIiwicGFyZW50Iiwic2libGluZ3MiLCJQYWdlTWFuYWdlciIsImNvbnRleHQiLCJ0eXBlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibG9hZCIsInBhZ2UiLCJkb2N1bWVudCIsInJlYWR5IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0s7QUFDYjtBQUFBLElBRWJBLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDTjtJQUNBLElBQUksQ0FBQ0MsUUFBUSxHQUFHLGlCQUFpQjtJQUNqQyxJQUFJLENBQUNDLGtCQUFrQixHQUFHLG9CQUFvQjtJQUM5QyxJQUFJLENBQUNDLGNBQWMsR0FBRyx3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QUk7RUFDaEMsQ0FBQztFQUFBcEgsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVLENBQ1YsQ0FBQztFQUFBOEcsV0FBQSxDQUVNSyxJQUFJLEdBQVgsU0FBQUEsS0FBWUosT0FBTyxFQUFFO0lBQ2pCLElBQU1LLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQ0wsT0FBTyxDQUFDO0lBRTlCeEcsQ0FBQyxDQUFDOEcsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQyxZQUFNO01BQ3BCRixJQUFJLENBQUNwSCxPQUFPLENBQUN1SCxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFOLFdBQUE7QUFBQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gJ3BhcGFwYXJzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gQ2xhc3Nlc1xuICAgICAgICB0aGlzLmNsYXNzUm93ID0gJy5tdWx0aS1hZGRfX3Jvdyc7XG4gICAgICAgIHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlID0gJy5tdWx0aS1hZGRfX3Jlc3VsdCc7XG4gICAgICAgIHRoaXMuY2xhc3NBZGRCdXR0b24gPSAnLm11bHRpLWFkZF9fYWRkLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuY2xhc3NSZW1vdmVCdXR0b24gPSAnLm11bHRpLWFkZF9fcmVtb3ZlLWJ1dHRvbic7XG5cbiAgICAgICAgLy8gQ2xhc3MgbmFtZXNcbiAgICAgICAgdGhpcy5jbGFzc05hbWVSb3dFcnJvciA9ICdtdWx0aS1hZGRfX3Jvdy0tZXJyb3InO1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uYWwgYXNzaWdubWVudHNcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoJy5tdWx0aS1hZGQnKTtcbiAgICAgICAgdGhpcy4kZmlsZSA9ICQoJy5jc3YtZmlsZScpO1xuICAgICAgICB0aGlzLnNuaXBwZXQgPSAkKHRoaXMuY2xhc3NSb3cpWzBdLm91dGVySFRNTDtcbiAgICAgICAgdGhpcy5saW5lcyA9IDE7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybXMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlc2V0U3RhdGUoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVzZXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRMb29wID0gMDtcbiAgICB9XG5cbiAgICAvLyBMb29wIGVycm9ycywgYWRkIGNsYXNzIGFuZCBjaGFuZ2UgdGV4dFxuICAgIGhhbmRsZUVycm9ycygpIHtcbiAgICAgICAgJCh0aGlzLmVycm9ycykuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyh0aGlzLmNsYXNzTmFtZVJvd0Vycm9yKTtcbiAgICAgICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dCgnUGxlYXNlIGNvbXBsZXRlIHRoZSBTS1UgYW5kIFF1YW50aXR5IGZpZWxkcycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSdW4gQUpBWCBjYWxscyBvbmUgYnkgb25lXG4gICAgaGFuZGxlQWpheCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdXRpbHMuYXBpLmdldFBhZ2UodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRMb29wXS51cmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2YvYjJiL3F1aWNrLWFkZC1yZXNwb25zZScsXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcmlwdFJlZ2V4ID0gLzxzY3JpcHRcXGJbXjxdKig/Oig/ITxcXC9zY3JpcHQ+KTxbXjxdKikqPFxcL3NjcmlwdD4vZ2k7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xlYW5SZXNwb25zZSA9IHJlc3BvbnNlLnJlcGxhY2Uoc2NyaXB0UmVnZXgsICcnKS50cmltKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjbGVhblJlc3BvbnNlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnRhcmdldC5jaGlsZHJlbih0aGlzLmNsYXNzUmVzdWx0TWVzc2FnZSkudGV4dChjbGVhblJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzLml0ZW1zW3RoaXMuY3VycmVudExvb3BdLnRhcmdldCkuYWRkQ2xhc3MoJ211bHRpLWFkZF9fcm93LS1hZHZpc29yeScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0LmNoaWxkcmVuKHRoaXMuY2xhc3NSZXN1bHRNZXNzYWdlKS50ZXh0KCQoJy5tdWx0aS1hZGRfX3N1Ym1pdC1idXR0b24nKS5kYXRhKCdtZXNzYWdlJykpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50TG9vcF0udGFyZ2V0KS5hdHRyKCdkYXRhLXN0YXR1cycsICdzdWNjZXNzJykuYWRkQ2xhc3MoJ211bHRpLWFkZF9fcm93LS1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSW5jcmVtZW50ICdjdXJyZW50JyBhbmQgcnVuIEFKQVggY2FsbCBhZ2FpblxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvb3ArKztcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWpheCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMYXN0IGF0dGVtcHQsIHJlZGlyZWN0IG9ubHlcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvb3AgPT09IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJy9jYXJ0LnBocCc7XG4gICAgICAgICAgICB0aGlzLmZldGNoQ291bnRlcigpO1xuICAgICAgICAgICAgJCgnLm11bHRpX2FkZF9fY2FydC1idXR0b24nKS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaENvdW50ZXIoKSB7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQoeyB0ZW1wbGF0ZTogJ2YvY2FydC9pdGVtLWNvdW50JyB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID4gMCkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQnV0dG9uRGlzcGxheSgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMuJGZvcm0uY2hpbGRyZW4odGhpcy5jbGFzc1Jvdyk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSByb3dzLmZpbmQodGhpcy5jbGFzc1JlbW92ZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbnMgPSByb3dzLmZpbmQodGhpcy5jbGFzc0FkZEJ1dHRvbik7XG4gICAgICAgIGNvbnN0IGxhc3RBZGRCdXR0b24gPSAkKHJvd3NbdGhpcy5saW5lcyAtIDFdKS5maW5kKHRoaXMuY2xhc3NBZGRCdXR0b24pO1xuXG4gICAgICAgIGlmICh0aGlzLmxpbmVzID4gMSkge1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9ucy5yZW1vdmVDbGFzcygnbXVsdGktYWRkX19yZW1vdmUtYnV0dG9uLS1sYXN0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMucmVtb3ZlQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgYWRkQnV0dG9ucy5ub3QobGFzdEFkZEJ1dHRvbikuYWRkQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQnV0dG9ucy5hZGRDbGFzcygnbXVsdGktYWRkX19yZW1vdmUtYnV0dG9uLS1sYXN0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbnMucmVtb3ZlQ2xhc3MoJ211bHRpLWFkZF9fYWRkLWJ1dHRvbi0tZGlzYWJsZWQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkTGluZShza3UsIHF0eSkge1xuICAgICAgICBjb25zdCBuZXdMaW5lID0gJCh0aGlzLnNuaXBwZXQpLmNsb25lKCk7XG5cbiAgICAgICAgaWYgKHNrdSAmJiBxdHkpIHtcbiAgICAgICAgICAgICQobmV3TGluZVswXS5jaGlsZHJlblswXSkudmFsKHNrdSk7XG4gICAgICAgICAgICAkKG5ld0xpbmVbMF0uY2hpbGRyZW5bMV0pLnZhbChxdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLm11bHRpLWFkZF9fc3VibWl0LWJ1dHRvbicpLmJlZm9yZShuZXdMaW5lKTtcbiAgICAgICAgdGhpcy5saW5lcysrO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQnV0dG9uRGlzcGxheSgpO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW92ZUxpbmUobGluZSkge1xuICAgICAgICBpZiAobGluZS5pcygnOm9ubHktb2YtdHlwZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsaW5lLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmxpbmVzLS07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVCdXR0b25EaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgaGFuZGxlSXRlbVNlbGVjdChldmVudCwgb3ZlcnJpZGUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IChldmVudCkgPyAkKGV2ZW50LnRhcmdldCkgOiBvdmVycmlkZTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVSb3cgPSBzZWxmLnBhcmVudHMoJy5tdWx0aS1hZGRfX3JvdycpO1xuICAgICAgICBjb25zdCByb3dJbmRleCA9IHJlbGF0aXZlUm93LmluZGV4KCkgLSAxO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2t1ID0gJC50cmltKHNlbGYudGV4dCgpKTtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVJbnB1dCA9IHJlbGF0aXZlUm93LmZpbmQoJ1tkYXRhLW11bHRpLXNrdV0nKTtcblxuICAgICAgICByZWxhdGl2ZUlucHV0WzBdLnZhbHVlID0gc2VsZWN0ZWRTa3U7XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybXNbcm93SW5kZXhdID0gc2VsZWN0ZWRTa3U7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0Zvcm0oZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBhbGxSb3dzID0gJChmb3JtKS5jaGlsZHJlbih0aGlzLmNsYXNzUm93KTtcbiAgICAgICAgY29uc3QgYWxsTWVzc2FnZXMgPSBhbGxSb3dzLmZpbmQodGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpO1xuXG4gICAgICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgICAgIC8vIEZvciBlYWNoIHJvdywgYWRkIHRoZSBVUkwgYW5kIHRhcmdldCB0byB0aGUgaXRlbXMgYXJyYXlcbiAgICAgICAgYWxsUm93cy5lYWNoKChpbmRleCwgcm93KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAkKHJvdyk7XG4gICAgICAgICAgICBjb25zdCBza3UgPSB0YXJnZXQuZmluZCgnW2RhdGEtbXVsdGktc2t1XScpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgcXR5ID0gdGFyZ2V0LmZpbmQoJ1tkYXRhLW11bHRpLXF0eV0nKS52YWwoKTtcblxuICAgICAgICAgICAgaWYgKCFza3UgfHwgIXF0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3V9JnF0eT0ke3F0eX1gO1xuXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG8gYWRkIGxhbmcgc3RyaW5nXG4gICAgICAgIGFsbE1lc3NhZ2VzLnRleHQoJ0FkZGluZyB0byBiYXNrZXQnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBamF4KCk7XG4gICAgfVxuXG4gICAgcGFyc2VDU1YoZXZlbnQsIF90aGlzKSB7XG4gICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlIHNwYW4nKS50ZXh0KCcnKTtcbiAgICAgICAgJCgnLmFsZXJ0Qm94JykuaGlkZSgpO1xuICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBsZXQgbm9Ta3U7XG4gICAgICAgIGxldCBub1F0eTtcblxuICAgICAgICBwYXJzZShmaWxlLCB7XG4gICAgICAgICAgICBwcmV2aWV3OiAxLFxuICAgICAgICAgICAgY29tcGxldGUocmVzdWx0cykge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGFbMF0uaW5kZXhPZignc2t1JykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vU2t1ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cy5kYXRhWzBdLmluZGV4T2YoJ3F0eScpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBub1F0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG5vUXR5IHx8IG5vU2t1KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub1NrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2Ugc3BhbicpLmFwcGVuZCgnIFBsZWFzZSBlbnN1cmUgeW91IGhhdmUgYSBoZWFkaW5nIGxhYmVsZWQgXCJza3VcIiBpbiByb3cgMS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9RdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5hbGVydEJveC1tZXNzYWdlIHNwYW4nKS5hcHBlbmQoJyBQbGVhc2UgZW5zdXJlIHlvdSBoYXZlIGEgaGVhZGluZyBsYWJlbGVkIFwicXR5XCIgaW4gcm93IDEuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnLmFsZXJ0Qm94Jykuc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlKGZpbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5bmFtaWNUeXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcEVtcHR5TGluZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwKHJvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNrdSA9IHJvdy5kYXRhWzBdLnNrdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdHkgPSByb3cuZGF0YVswXS5xdHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQWRkTGluZShza3UsIHF0eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBCaW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCB0aGlzLmNsYXNzQWRkQnV0dG9uLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFkZExpbmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2xpY2snLCB0aGlzLmNsYXNzUmVtb3ZlQnV0dG9uLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZUxpbmUoJChldmVudC50YXJnZXQpLnBhcmVudCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZm9ybS5vbignY2hhbmdlJywgJ1tkYXRhLW11bHRpLXNrdV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gJChldmVudC50YXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZi52YWwoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2libGluZ3ModGhpcy5jbGFzc1Jlc3VsdE1lc3NhZ2UpLnRleHQoJycpO1xuICAgICAgICAgICAgICAgIHNlbGYucGFyZW50KCkucmVtb3ZlQ2xhc3ModGhpcy5jbGFzc05hbWVSb3dFcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Zvcm0oZXZlbnQsIHRoaXMuJGZvcm1bMF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmaWxlLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhcnNlQ1NWKGV2ZW50LCB0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICB0eXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWQoY29udGV4dCkge1xuICAgICAgICBjb25zdCBwYWdlID0gbmV3IHRoaXMoY29udGV4dCk7XG5cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgcGFnZS5vblJlYWR5LmJpbmQocGFnZSkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==