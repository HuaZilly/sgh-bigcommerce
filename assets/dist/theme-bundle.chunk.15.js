(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
    this.highlightPageCount();
  };
  _proto.highlightPageCount = function highlightPageCount() {
    var url = url__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.href, true);
    if (url.query.limit) {
      $(".productCount [data-count=" + url.query.limit + "]").addClass('productCount__item--active');
    } else if (this.context.categoryProductsPerPage) {
      $(".productCount [data-count=" + this.context.categoryProductsPerPage + "]").addClass('productCount__item--active');
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $headerTitleContainer = $('#headerTitleContainer');
    var $itemsPerPageCounter = $('.js-product-count');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'f/category/product-listing',
        sidebar: 'category/sidebar',
        headerTitle: 'f/category/header-title',
        itemsPerPage: 'f/category/show-amount'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $headerTitleContainer.html(content.headerTitle);
      $itemsPerPageCounter.html(content.itemsPerPage);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      if (_this.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
      }
      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_8__["default"])(_this.context);
      _this.highlightPageCount();
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImVuYWJsZVNpZGVDYXJ0Iiwic2lkZUNhcnQiLCJjYXJkQWRkVG9DYXJ0IiwiZ3JpZFN3aXRjaGVyIiwiaGlnaGxpZ2h0UGFnZUNvdW50IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeSIsImxpbWl0IiwiYWRkQ2xhc3MiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsIl90aGlzIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkaGVhZGVyVGl0bGVDb250YWluZXIiLCIkaXRlbXNQZXJQYWdlQ291bnRlciIsInByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImhlYWRlclRpdGxlIiwiaXRlbXNQZXJQYWdlIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDSDtBQUNaO0FBQ2Y7QUFDNEI7QUFBQSxJQUU3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QUM7TUFDckRWLHVCQUF1QixDQUFDa0IsSUFBSSxDQUFDRCxPQUFPLENBQUNOLE9BQU8sQ0FBQztNQUM3Q1YscUJBQXFCLENBQUNpQixJQUFJLENBQUNELE9BQU8sQ0FBQ0wsV0FBVyxDQUFDO01BQy9DVixvQkFBb0IsQ0FBQ2dCLElBQUksQ0FBQ0QsT0FBTyxDQUFDSixZQUFZLENBQUM7TUFFL0NyQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMyQyxPQUFPLENBQUM7UUFDcEJDLFNBQVMsRUFBRTtNQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFUCxJQUFJdEIsS0FBSSxDQUFDeEIsT0FBTyxDQUFDUyxjQUFjLEVBQUU7UUFDN0JDLDREQUFRLENBQUMsQ0FBQztNQUNkO01BRUFDLG1FQUFhLENBQUMsQ0FBQztNQUVmQyxxRUFBWSxDQUFDWSxLQUFJLENBQUN4QixPQUFPLENBQUM7TUFFMUJ3QixLQUFJLENBQUNYLGtCQUFrQixDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUF0QixRQUFBO0FBQUEsRUEzRWlDd0QsZ0RBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgY2FyZEFkZFRvQ2FydCBmcm9tICcuL2YvY2FyZC1hZGQtdG8tY2FydCc7XG5pbXBvcnQgc2lkZUNhcnQgZnJvbSAnLi9mL3NpZGUtY2FydCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgZ3JpZFN3aXRjaGVyIGZyb20gJy4vZi9ncmlkLWxpc3Qtc3dpdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0LnVybHMpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgc2lkZUNhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRBZGRUb0NhcnQoKTtcblxuICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLmhpZ2hsaWdodFBhZ2VDb3VudCgpO1xuICAgIH1cblxuICAgIGhpZ2hsaWdodFBhZ2VDb3VudCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgaWYgKHVybC5xdWVyeS5saW1pdCkge1xuICAgICAgICAgICAgJChgLnByb2R1Y3RDb3VudCBbZGF0YS1jb3VudD0ke3VybC5xdWVyeS5saW1pdH1dYCkuYWRkQ2xhc3MoJ3Byb2R1Y3RDb3VudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlKSB7XG4gICAgICAgICAgICAkKGAucHJvZHVjdENvdW50IFtkYXRhLWNvdW50PSR7dGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlfV1gKS5hZGRDbGFzcygncHJvZHVjdENvdW50X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGhlYWRlclRpdGxlQ29udGFpbmVyID0gJCgnI2hlYWRlclRpdGxlQ29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRpdGVtc1BlclBhZ2VDb3VudGVyID0gJCgnLmpzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2YvY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGVyVGl0bGU6ICdmL2NhdGVnb3J5L2hlYWRlci10aXRsZScsXG4gICAgICAgICAgICAgICAgaXRlbXNQZXJQYWdlOiAnZi9jYXRlZ29yeS9zaG93LWFtb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkaGVhZGVyVGl0bGVDb250YWluZXIuaHRtbChjb250ZW50LmhlYWRlclRpdGxlKTtcbiAgICAgICAgICAgICRpdGVtc1BlclBhZ2VDb3VudGVyLmh0bWwoY29udGVudC5pdGVtc1BlclBhZ2UpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgICAgIHNpZGVDYXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhcmRBZGRUb0NhcnQoKTtcblxuICAgICAgICAgICAgZ3JpZFN3aXRjaGVyKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0UGFnZUNvdW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=