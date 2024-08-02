(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_3__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this = this;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'f/brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_4__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      if (_this.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
      }
      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_5__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.context);
    });
  };
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsImNhcmRBZGRUb0NhcnQiLCJlbmFibGVTaWRlQ2FydCIsInNpZGVDYXJ0IiwiZ3JpZFN3aXRjaGVyIiwiX3RoaXMiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDSDtBQUNaO0FBQ2E7QUFBQSxJQUU3QkEsS0FBSywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELE1BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosS0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxLQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN0QkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOQyx3RUFBZSxDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEMsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVCLENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0EsY0FBYyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO01BQ3BEQyxnRUFBSyxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDSCxjQUFjLENBQUM7SUFDckQ7SUFDQUksbUVBQWEsQ0FBQyxDQUFDO0lBRWYsSUFBSSxJQUFJLENBQUNULE9BQU8sQ0FBQ1UsY0FBYyxFQUFFO01BQzdCQyw0REFBUSxDQUFDLENBQUM7SUFDZDtJQUVBQyxxRUFBWSxDQUFDLElBQUksQ0FBQ1osT0FBTyxDQUFDO0VBQzlCLENBQUM7RUFBQUosTUFBQSxDQUVEUSxpQkFBaUIsR0FBakIsU0FBQUEsa0JBQUEsRUFBb0I7SUFBQSxJQUFBUyxLQUFBO0lBQ2hCLElBQU1DLHdCQUF3QixHQUFHWixDQUFDLENBQUMsNEJBQTRCLENBQUM7SUFDaEUsSUFBTWEsdUJBQXVCLEdBQUdiLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM5RCxJQUFNYyxlQUFlLEdBQUcsSUFBSSxDQUFDaEIsT0FBTyxDQUFDaUIsb0JBQW9CO0lBQ3pELElBQU1DLGNBQWMsR0FBRztNQUNuQkMsUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSx5QkFBeUI7UUFDekNDLE9BQU8sRUFBRTtNQUNiLENBQUM7TUFDREMsTUFBTSxFQUFFO1FBQ0pDLGFBQWEsRUFBRSxJQUFJO1FBQ25CQyxLQUFLLEVBQUU7VUFDSEMsUUFBUSxFQUFFO1lBQ05DLEtBQUssRUFBRVY7VUFDWDtRQUNKO01BQ0osQ0FBQztNQUNEVyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSUMsOERBQWEsQ0FBQ1gsY0FBYyxFQUFFLFVBQUNZLE9BQU8sRUFBSztNQUNoRWhCLHdCQUF3QixDQUFDaUIsSUFBSSxDQUFDRCxPQUFPLENBQUNWLGNBQWMsQ0FBQztNQUNyREwsdUJBQXVCLENBQUNnQixJQUFJLENBQUNELE9BQU8sQ0FBQ1QsT0FBTyxDQUFDO01BRTdDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDOEIsT0FBTyxDQUFDO1FBQ3BCQyxTQUFTLEVBQUU7TUFDZixDQUFDLEVBQUUsR0FBRyxDQUFDO01BRVAsSUFBSXBCLEtBQUksQ0FBQ2IsT0FBTyxDQUFDVSxjQUFjLEVBQUU7UUFDN0JDLDREQUFRLENBQUMsQ0FBQztNQUNkO01BQ0FGLG1FQUFhLENBQUMsQ0FBQztNQUNmRyxxRUFBWSxDQUFDQyxLQUFJLENBQUNiLE9BQU8sQ0FBQztJQUM5QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUEsT0FBQVQsS0FBQTtBQUFBLEVBckQ4QjJDLGdEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay40MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IGNhcmRBZGRUb0NhcnQgZnJvbSAnLi9mL2NhcmQtYWRkLXRvLWNhcnQnO1xuaW1wb3J0IHNpZGVDYXJ0IGZyb20gJy4vZi9zaWRlLWNhcnQnO1xuaW1wb3J0IGdyaWRTd2l0Y2hlciBmcm9tICcuL2YvZ3JpZC1saXN0LXN3aXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgc2lkZUNhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWRTd2l0Y2hlcih0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuZW5hYmxlU2lkZUNhcnQpIHtcbiAgICAgICAgICAgICAgICBzaWRlQ2FydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZEFkZFRvQ2FydCgpO1xuICAgICAgICAgICAgZ3JpZFN3aXRjaGVyKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=