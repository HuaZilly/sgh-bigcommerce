(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./f/card-add-to-cart */ "./assets/js/theme/f/card-add-to-cart.js");
/* harmony import */ var _f_side_cart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./f/side-cart */ "./assets/js/theme/f/side-cart.js");
/* harmony import */ var _f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./f/grid-list-switcher */ "./assets/js/theme/f/grid-list-switcher.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }












var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$contentResultsContainer.addClass('category--hide');
    this.$productListingContainer.removeClass('category--hide');
    this.$facetedSearchContainer.removeClass('category--hide');
    this.$productSideCart.removeClass('category--hide');
    this.$productOptions.removeClass('category--hide');
    this.$productPagination.removeClass('category--hide');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].searchGoToUrl(url);
    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }
  };
  _proto.showContent = function showContent() {
    var url = _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('category--hide');
    this.$productListingContainer.addClass('category--hide');
    this.$facetedSearchContainer.addClass('category--hide');
    this.$productSideCart.addClass('category--hide');
    this.$productOptions.addClass('category--hide');
    this.$productPagination.addClass('category--hide');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_url_utils__WEBPACK_IMPORTED_MODULE_14__["default"].searchGoToUrl(url);
    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_13__["default"])(this.context.urls);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_15___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$contentResultsContainer = $('#search-results-content');
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$productSideCart = $('.product-sidecart');
    this.$productOptions = $('#product-options');
    this.$productPagination = $('#product-pagination');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_10__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    if (this.context.enableSideCart) {
      Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
    }
    Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__["default"])();
    Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__["default"])(this.context);

    // Init collapsibles
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_16__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    if (this.$productListingContainer.find('li.productCard').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'f/search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'f/search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_12__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      Object(_f_card_add_to_cart__WEBPACK_IMPORTED_MODULE_19__["default"])();
      Object(_f_grid_list_switcher__WEBPACK_IMPORTED_MODULE_21__["default"])(_this5.context);
      if (_this5.context.enableSideCart) {
        Object(_f_side_cart__WEBPACK_IMPORTED_MODULE_20__["default"])();
      }
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_18__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_11__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciIsImFkZENsYXNzIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwicmVtb3ZlQ2xhc3MiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsIiRwcm9kdWN0U2lkZUNhcnQiLCIkcHJvZHVjdE9wdGlvbnMiLCIkcHJvZHVjdFBhZ2luYXRpb24iLCIkIiwic2VhcmNoR29Ub1VybCIsImNvbnRleHQiLCJlbmFibGVTaWRlQ2FydCIsInNpZGVDYXJ0Iiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiX3RoaXMyIiwiY29tcGFyZVByb2R1Y3RzIiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY2FyZEFkZFRvQ2FydCIsImdyaWRTd2l0Y2hlciIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJfdGhpczMiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwiX3RoaXM0IiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIl90aGlzNSIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCIkZm9ybSIsIm5vZCIsInN1Ym1pdCIsIiRlbGVtZW50IiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIkNhdGFsb2dQYWdlIl0sIm1hcHBp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QU8sQ0FBQ0MsY0FBYyxFQUFFO1FBQzdCQyw2REFBUSxDQUFDLENBQUM7TUFDZDtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXJDLE1BQUEsQ0FFRDhELGNBQWMsR0FBZCxTQUFBQSxlQUFlNkQsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQzlELFNBQVMsR0FBRytELDREQUFHLENBQUM7TUFDakJDLE1BQU0sRUFBRUY7SUFDWixDQUFDLENBQUM7SUFFRixPQUFPLElBQUk7RUFDZixDQUFDO0VBQUEzSCxNQUFBLENBRUQrRCxjQUFjLEdBQWQsU0FBQUEsZUFBZStELFFBQVEsRUFBRTtJQUNyQixJQUFJLElBQUksQ0FBQ2pFLFNBQVMsRUFBRTtNQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQ2tFLEdBQUcsQ0FBQztRQUNmQyxRQUFRLEVBQUVGLFFBQVE7UUFDbEJHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxZQUFZLEVBQUVKLFFBQVEsQ0FBQ3ZILElBQUksQ0FBQyxjQUFjO01BQzlDLENBQUMsQ0FBQztJQUNOO0lBRUEsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUFBUCxNQUFBLENBRURzRSxLQUFLLEdBQUwsU0FBQUEsTUFBQSxFQUFRO0lBQ0osSUFBSSxJQUFJLENBQUNULFNBQVMsRUFBRTtNQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQ3NFLFlBQVksQ0FBQyxDQUFDO01BQzdCLE9BQU8sSUFBSSxDQUFDdEUsU0FBUyxDQUFDdUUsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN6QztJQUVBLE9BQU8sS0FBSztFQUNoQixDQUFDO0VBQUEsT0FBQXpJLE1BQUE7QUFBQSxFQW5SK0IwSSxpREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgY2FyZEFkZFRvQ2FydCBmcm9tICcuL2YvY2FyZC1hZGQtdG8tY2FydCc7XG5pbXBvcnQgc2lkZUNhcnQgZnJvbSAnLi9mL3NpZGUtY2FydCc7XG5pbXBvcnQgZ3JpZFN3aXRjaGVyIGZyb20gJy4vZi9ncmlkLWxpc3Qtc3dpdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcbiAgICAgICAgY29uc3Qgbm9kZURhdGEgPSB7XG4gICAgICAgICAgICB0ZXh0OiBub2RlLmRhdGEsXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcbiAgICAgICAgICAgIHN0YXRlOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IG5vZGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5zdGF0ZS5vcGVuZWQgPSBub2RlLnN0YXRlID09PSAnb3Blbic7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4ucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgICAgc2VjdGlvbjogJ3Byb2R1Y3QnLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdFNpZGVDYXJ0LnJlbW92ZUNsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0T3B0aW9ucy5yZW1vdmVDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdFBhZ2luYXRpb24ucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHVybFV0aWxzLnNlYXJjaEdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmVuYWJsZVNpZGVDYXJ0KSB7XG4gICAgICAgICAgICBzaWRlQ2FydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMod2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIHNlY3Rpb246ICdjb250ZW50JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG5cbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuYWRkQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RTaWRlQ2FydC5hZGRDbGFzcygnY2F0ZWdvcnktLWhpZGUnKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdE9wdGlvbnMuYWRkQ2xhc3MoJ2NhdGVnb3J5LS1oaWRlJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RQYWdpbmF0aW9uLmFkZENsYXNzKCdjYXRlZ29yeS0taGlkZScpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB1cmxVdGlscy5zZWFyY2hHb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgc2lkZUNhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgJHNlYXJjaEZvcm0gPSAkKCdbZGF0YS1hZHZhbmNlZC1zZWFyY2gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RTaWRlQ2FydCA9ICQoJy5wcm9kdWN0LXNpZGVjYXJ0Jyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RPcHRpb25zID0gJCgnI3Byb2R1Y3Qtb3B0aW9ucycpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0UGFnaW5hdGlvbiA9ICQoJyNwcm9kdWN0LXBhZ2luYXRpb24nKTtcblxuICAgICAgICAvLyBJbml0IGZhY2V0ZWQgc2VhcmNoXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgc2lkZUNhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhcmRBZGRUb0NhcnQoKTtcblxuICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0Q2FyZCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcbiAgICAgICAgICAgIC5iaW5kVmFsaWRhdGlvbigkc2VhcmNoRm9ybS5maW5kKCcjc2VhcmNoX3F1ZXJ5X2FkdicpKTtcblxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcbiAgICAgICAgdGhpcy5jcmVhdGVDYXRlZ29yeVRyZWUoJGNhdGVnb3J5VHJlZUNvbnRhaW5lcik7XG5cbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2F0ZWdvcnlJZHMgPSAkY2F0ZWdvcnlUcmVlQ29udGFpbmVyLmpzdHJlZSgpLmdldF9zZWxlY3RlZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRzZWFyY2hGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjYXRlZ29yeVxcW1xcXVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkc2VhcmNoRm9ybS5hcHBlbmQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hIZWFkaW5nID0gJCgnI3NlYXJjaC1yZXN1bHRzLWhlYWRpbmcnKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnZi9zZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdmL3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICAgICAgICAkc2VhcmNoSGVhZGluZy5odG1sKGNvbnRlbnQuaGVhZGluZyk7XG4gICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICBjYXJkQWRkVG9DYXJ0KCk7XG4gICAgICAgICAgICBncmlkU3dpdGNoZXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5lbmFibGVTaWRlQ2FydCkge1xuICAgICAgICAgICAgICAgIHNpZGVDYXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==