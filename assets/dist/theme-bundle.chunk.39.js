(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Compare; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Compare = /*#__PURE__*/function (_PageManager) {
  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Compare, _PageManager);
  var _proto = Compare.prototype;
  _proto.onReady = function onReady() {
    var _this = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])(message);
        event.preventDefault();
      }
    });
  };
  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");



function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var products;
  var $checked = $('body').find('input[name="products\[\]"]:checked');
  var $compareLink = $('a[data-compare-nav]');
  if ($checked.length !== 0) {
    products = lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    });
    updateCounterNav(products, $compareLink, urlContext);
  }
  var compareCounter = products || [];
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_2__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ29tcGFyZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIiQiLCJvbiIsImV2ZW50IiwiY29tcGFyaXNvbnMiLCJsZW5ndGgiLCJzaG93QWxlcnRNb2RhbCIsInByZXZlbnREZWZhdWx0IiwiUGFnZU1hbmFnZXIiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwicHVzaCIsInVwZGF0ZUNvdW50ZXJOYXYiLCIkbGluayIsInVybENvbnRleHQiLCJpcyIsImFkZENsYXNzIiwiYXR0ciIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJfbWFwIiwiZWxlbWVudCIsInZhbHVlIiwiY29tcGFyZUNvdW50ZXIiLCJwcm9kdWN0IiwiY3VycmVudFRhcmdldCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQ1E7QUFBQSxJQUVuQ0EsT0FBTywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFFBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FB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Q29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYXJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY29udGV4dC5jb21wYXJlUmVtb3ZlTWVzc2FnZTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmlzb24tcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuY29tcGFyaXNvbnMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IHByb2R1Y3RzO1xuXG4gICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICBpZiAoJGNoZWNrZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihwcm9kdWN0cywgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlQ291bnRlciA9IHByb2R1Y3RzIHx8IFtdO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=