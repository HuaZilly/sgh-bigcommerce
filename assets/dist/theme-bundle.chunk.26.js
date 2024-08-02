(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_4___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");














/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'f/category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker',
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_9__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });
    if ($('.no-product').length > 0) {
      $(this.options.componentSelector).find(' > .accordion--navList').hide();
    }

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe DOM events
    window.onpopstate = function () {
      $(window).trigger('statechange');
    };

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_10__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_12__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_11__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_12__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_7___default.a.parse(window.location.href);
    var queryParams = decodeURI($(currentTarget).serialize());
    _url_utils__WEBPACK_IMPORTED_MODULE_8__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_7___default.a.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  return FacetedSearch;
}();
/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);


var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  searchGoToUrl: function searchGoToUrl() {
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_1___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/f/auto-highlight.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/f/auto-highlight.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('input[type=tel]').on('focusin mouseup', function (event) {
    $(event.target).select();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/f/card-add-to-cart.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/f/card-add-to-cart.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _card_item_in_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-item-in-cart */ "./assets/js/theme/f/card-item-in-cart.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  function updateSideCart() {
    var $sideCart = $('.side-cart-content');
    var $sideCartDetails = $('.side-cart-details');
    var $sideCartActions = $('.side-cart-actions');
    var options = {
      template: {
        template: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        actions: 'f/b2b/side-cart-actions',
        itemcount: 'f/cart/item-count'
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getContent(options, function (err, response) {
      if (response.itemcount > 0) {
        $sideCart.html(response.template);
        $sideCartDetails.html(response.details);
        $sideCartActions.html(response.actions);
        $('.cart-quantity').html(response.itemcount);
        Object(_card_item_in_cart__WEBPACK_IMPORTED_MODULE_3__["default"])();
      }
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
    });
  }

  // Popup function for input notification
  function popup(target, str, delay) {
    var $addPopup = $(target).find('.add-card-popup');
    $addPopup.html("" + str);
    $addPopup.fadeIn(0).delay(delay).fadeOut(0);
    $('target').blur();
  }
  function addProductToCart(event, form) {
    $('.side-cart-loading').css('display', 'block');
    $('.side-cart-item').css('opacity', '0.5');

    // Get target product
    var $addToCartBtn = $('.button.button--primary.button--cardAdd', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
      return;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    $addToCartBtn.val(waitMessage).prop('disabled', true);
    $addToCartBtn.closest('.form-cardAdd').addClass('hovering');

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.itemAdd(new FormData(form), function (err, response) {
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);
      $addToCartBtn.closest('.form-cardAdd').removeClass('hovering');
      // Guard statement
      if (errorMessage) {
        popup(event.target, errorMessage, 4000);
        console.log(response.data);
        window.location.replace(response.data.data.url);
      } else {
        // To add lang string
        popup(event.target, 'Item added', 2000);
      }
      var cartOptions = {
        template: 'f/cart/item-count'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getContent(cartOptions, function (error, resp) {
        $('.cart-quantity').html(resp);
        if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].tools.storage.localStorageAvailable()) {
          localStorage.setItem('cart-quantity', resp);
        }
      });
      updateSideCart();
    });
  }
  $('[data-cart-item-add-from-card]').on('submit', function (event) {
    addProductToCart(event, event.target);
  });
  $('.form-input').on('mouseover', function () {
    $(this).closest('.form-cardAdd').addClass('hovering');
  });
  $('.form-input').on('mouseleave', function () {
    $(this).closest('.form-cardAdd').removeClass('hovering');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/f/card-item-in-cart.js":
/*!************************************************!*\
  !*** ./assets/js/theme/f/card-item-in-cart.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_8__);









function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/* harmony default export */ __webpack_exports__["default"] = (function (removeItemId) {
  // Display on product card that product has been added to cart
  var cartItems = $('#cart-preview-dropdown .side-cart-item');
  for (var _iterator = _createForOfIteratorHelperLoose(cartItems), _step; !(_step = _iterator()).done;) {
    var cartItem = _step.value;
    var itemId = $(cartItem).find('[data-product-id]').data().productId;
    var itemQty = cartItem.querySelector('[value]').value;
    var itemTextContainer = $('.card').find("[data-qtyInCart='" + itemId + "']");
    // To add lang string
    itemTextContainer.html("You have " + itemQty + " in your cart");
  }
  if (removeItemId) {
    $('.card').find("[data-qtyInCart='" + removeItemId + "']").html('');
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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

/***/ "./assets/js/theme/f/request.js":
/*!**************************************!*\
  !*** ./assets/js/theme/f/request.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign.js */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Checks whether or not the current method passed in is valid
 *
 * @param {string} method
 * @returns {boolean}
 */
function isValidHTTPMethod(method) {
  var allowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  return allowedMethods.indexOf(method) !== -1;
}
/* harmony default export */ __webpack_exports__["default"] = (function (url, opts, callback) {
  var defaultOptions = {
    method: 'GET',
    remote: false,
    requestOptions: {
      formData: null,
      params: {},
      config: {},
      template: []
    }
  };
  var options = Object.assign({}, defaultOptions, opts);
  var data = options.requestOptions.formData ? options.requestOptions.formData : options.requestOptions.params;
  var headers = {
    'stencil-config': options.requestOptions.config ? JSON.stringify(options.requestOptions.config) : '{}',
    'stencil-options': '{}'
  };
  var requestedTemplate = options.requestOptions.template;
  var usingTemplates = false;
  var usingSections = false;
  var templates = [];

  // Not a valid method
  if (!isValidHTTPMethod(options.method)) {
    return callback(new Error('Not a valid HTTP method'));
  }
  if (typeof requestedTemplate === 'object' && !Array.isArray(requestedTemplate)) {
    var template;
    usingSections = true;
    templates = [];
    for (template in requestedTemplate) {
      if (requestedTemplate.hasOwnProperty(template)) {
        templates.push(requestedTemplate[template]);
      }
    }
  } else if (typeof requestedTemplate === 'string') {
    templates = [requestedTemplate];
  } else if (Array.isArray(requestedTemplate) && requestedTemplate.length > 0) {
    templates = requestedTemplate;
  }
  if (templates.length > 0) {
    usingTemplates = true;
    headers['stencil-options'] = JSON.stringify({
      render_with: templates.join(',')
    });
  }

  // make ajax request using jquery
  $.ajax({
    method: options.method,
    url: url,
    contentType: options.requestOptions.formData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: !options.requestOptions.formData,
    success: function success(response) {
      var ret;
      var content = options.remote ? response.content : response;
      if (usingTemplates) {
        // Remove the `components` prefix from the response if it's an object
        if (typeof content === 'object') {
          var keys = Object.keys(content);
          var key;
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            key = _keys[_i];
            var cleanKey = key.replace(/^components\//, '');
            content[cleanKey] = content[key];
            delete content[key];
          }
        }

        // If using "sections", morph the content into the arbitrary keys => content object.
        if (usingSections) {
          var templateVariableNames = Object.keys(requestedTemplate);
          var templateVariable;
          for (var _i2 = 0, _templateVariableName = templateVariableNames; _i2 < _templateVariableName.length; _i2++) {
            templateVariable = _templateVariableName[_i2];
            content[templateVariable] = content[requestedTemplate[templateVariable]];
            delete content[requestedTemplate[templateVariable]];
          }
        }
        if (options.remote) {
          ret = response;
          ret.content = content;
        } else {
          ret = content;
        }
      } else {
        ret = response;
      }
      callback(null, ret);
    },
    error: function error(XHR, textStatus, err) {
      callback(err);
    },
    data: data,
    headers: headers
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/f/side-cart.js":
/*!****************************************!*\
  !*** ./assets/js/theme/f/side-cart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sideCart; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./assets/js/theme/f/request.js");
/* harmony import */ var _auto_highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auto-highlight */ "./assets/js/theme/f/auto-highlight.js");
/* harmony import */ var _card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-item-in-cart */ "./assets/js/theme/f/card-item-in-cart.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _check_validity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-validity */ "./assets/js/theme/f/check-validity.js");









function sideCart() {
  // Set up the mutable page height by grabbing it and the cart height then modifying based on one another
  // Also grab viewport height so we can create a scrollable inner element
  var getPageHeight = $('.page').height();
  var getCartHeight = $('.side-cart').height();

  // Only mut the height of elements if not on a mobile device
  if (!/Mobi/i.test(navigator.userAgent)) {
    $('#side-cart-container .side-cart-container').css('height', getPageHeight);
  }

  // Quick-Add SKU handler
  var $form = $('.quick-add');

  // Set up the sticky-ness of the side-cart
  var Sticky = __webpack_require__(/*! sticky-js */ "./node_modules/sticky-js/index.js");
  var sticky = new Sticky('#side-cart-container');

  // Update the cart size/dimensions function
  function updateCartSize() {
    // Mut the page height to better contain the side-cart
    getPageHeight = $('.page').height();
    getCartHeight = $('#side-cart-container').height();

    // Check for the existence of the data-sticky-contianer tag to make sure we should mut the page
    var getPageType = $('.page').attr('data-sticky-container');
    if (getPageType && $(window).width() > 1260) {
      if (getPageHeight < 685) {
        sticky.destroy();
      }
      if (getCartHeight > 685 && getPageHeight < 734) {
        $('.page-content').css('min-height', getCartHeight + 49);
        $('.side-cart-container').css('min-height', getCartHeight + 26);
      } else {
        switch (getCartHeight > getPageHeight) {
          case true:
            $('#side-cart-container .side-cart-container').css('min-height', getCartHeight);
            $('.page-content').css('min-height', getCartHeight + 40);
            break;
          case false:
            $('.page-content').css('min-height');
            sticky.update();
            break;
          default:
        }
      }
    }

    // This line cuts out a five line else-if. It's not meant to be called after being created, just invoked upon birth.
    var sideCartPopulatedCheck = !$('.side-cart-item').text() ? $('.side-cart-placeholder').css('display', 'block') : false; // eslint-disable-line no-unused-vars

    Object(_auto_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }

  // Update the cart function
  function updateCart() {
    var $sideCart = $('.side-cart-content');
    var $sideCartDetails = $('.side-cart-details');
    var $sideCartActions = $('.side-cart-actions');
    $('.side-cart-loading').css('display', 'block');
    $('.side-cart-item').css('opacity', '0.5');
    var options = {
      template: {
        content: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        actions: 'f/b2b/side-cart-actions',
        counter: 'f/cart/item-count'
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
      $sideCart.html(response.content);
      $sideCartDetails.html(response.details);
      $sideCartActions.html(response.actions);
      $('.cart-quantity').html(response.counter);

      // This line cuts out a five line else-if. It's not meant to be called after being created, just invoked upon birth.
      var sideCartPopulatedCheck = !$('.side-cart-item').text() ? $('.side-cart-placeholder').css('display', 'block') : false; // eslint-disable-line no-unused-vars

      $('body').trigger('cart-quantity-update', response.counter);
      $('.side-cart-loading').css('display', 'none');
      $('.side-cart-item').css('opacity', '1');
      Object(_card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__["default"])();
    });
    updateCartSize();
  }

  // Popup function for input notification
  function popup(target, parent, child, str, delay) {
    var $popup = $(target).parents("" + parent).find("" + child);
    $popup.html("" + str);
    $popup.fadeIn(0).delay(delay).fadeOut(0);
  }

  // Debouncer fucntion to stop mut catching spam
  function debounce(func, wait, immediate) {
    for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      args[_key - 3] = arguments[_key];
    }
    var timeout;
    return function bounced() {
      var context = this;
      var later = function timedOut() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // Setup a listener for window resizing/scrolling to help keep side-cart boundaries compliant
  var catchWindowResize = debounce(function () {
    updateCartSize();
  }, 350);
  $(window).resize(catchWindowResize);
  $(window).scroll(catchWindowResize);

  // Bind the quick add SKU button
  function processForm(event, form) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var targetForm = form;
    var sku = $(targetForm).find('[data-sku]');
    var qty = $(targetForm).find('[data-qty]');
    var url = "/cart.php?action=add&sku=" + sku.val() + "&qty=" + qty.val();
    var options = {
      template: {
        error: 'f/b2b/quick-add-response',
        content: 'f/b2b/side-cart-content',
        details: 'f/b2b/side-cart-details',
        newsku: 'f/b2b/side-cart-quick-add-sku',
        counter: 'f/cart/item-count'
      }
    };
    if (sku.val() && qty.val()) {
      Object(_request__WEBPACK_IMPORTED_MODULE_4__["default"])(url, {
        method: 'POST',
        requestOptions: options
      }, function (err, response) {
        var scriptRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        var cleanResponse = response.error.replace(scriptRegex, '').trim();
        if (err) {
          throw new Error(err);
        }
        if (cleanResponse.length) {
          popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', cleanResponse, 4000);
        } else {
          updateCart();
          $('body').trigger('cart-quantity-update', response.counter);
          // To add lang string
          popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', qty.val() + " &times " + sku.val() + " Added to Cart", 2000);
        }
        sku.val('');
        qty.val(1);
      });
    } else {
      popup(event.currentTarget, '.side-cart-sku-add', '.add-side-cart-sku-item', $(event.currentTarget).data('error'), 2000);
    }
    updateCartSize();
  }
  $form.on('submit', function (event) {
    processForm(event, event.target);
  });

  // Update a product quantity
  $(document).on('change', '.side-cart-item-qty-input', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var isValid = event.target;
    if (!isValid.checkValidity()) {
      if (_check_validity__WEBPACK_IMPORTED_MODULE_8__["default"]) {
        isValid.reportValidity();
        return;
      } else {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: "Please enter a valid quantity (multiples of " + isValid.step + ")",
          type: 'error'
        });
      }
    }
    var itemId = $(event.currentTarget).data('id').substring(4);
    var newQty = parseInt($(event.currentTarget).val(), 10);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      if (response.data.errors.length) {
        var currentErr = response.data.errors.join('/n');
        var errMax = currentErr.search(/maximum/i);
        var errMin = currentErr.search(/minimum/i);
        var errStock = currentErr.search(/enough/i);
        if (errMax !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('quantity-max-error'), 2000);
        } else if (errMin !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('quantity-min-error'), 2000);
        } else if (errStock !== -1) {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', $(event.currentTarget).data('stock-error'), 2000);
        } else {
          popup(event.currentTarget, '.side-cart-item-info', '.change-side-cart-qty', currentErr, 2000);
        }
        Object(_auto_highlight__WEBPACK_IMPORTED_MODULE_5__["default"])();
      } else {
        updateCart();
      }
    });
  });

  // Remove item from the cart function
  function cartRemoveItem(itemId, productId) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response) {
        // Catch for if you try to remove the item before the cart has been updated with it server-side
        if (response.data.status === 'succeed') {
          updateCart();
        } else {
          updateCart();
          alert(response.data.errors.join('\n'));
        }
        Object(_card_item_in_cart__WEBPACK_IMPORTED_MODULE_6__["default"])(productId);
      }
    });
  }

  // Remove an item from the cart trigger
  $(document).on('click', '.cart-remove', function (event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    var itemId = $(event.currentTarget).data('cart-itemid');
    var productId = $(event.currentTarget).data('product-id');
    cartRemoveItem(itemId, productId);
  });

  // Update everything
  updateCart();
}
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

/***/ }),

/***/ 2:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9mL2F1dG8taGlnaGxpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9mL2NhcmQtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2FyZC1pdGVtLWluLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2hlY2stdmFsaWRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9zaWRlLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3V0aWwuaW5zcGVjdCAoaWdub3JlZCkiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiX3RoaXMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsIl9leHRlbmQiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsImxlbmd0aCIsImZpbmQiLCJoaWRlIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvbnBvcHN0YXRlIiwidHJpZ2dlciIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJpZCIsImF0dHIiLCJfd2l0aG91dCIsImhhc01vcmVSZXN1bHRzIiwiX3VuaW9uIiwidG9nZ2xlRmFjZXRJdGVtcyIsIl9pbmNsdWRlcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJfdGhpczMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCJfdGhpczQiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsIl90aGlzNSIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib24iLCJkb2N1bWVudCIsImhvb2tzIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJkZWNvZGVVUkkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJzZWFyY2hHb1RvVXJsIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwiaGFzT3duUHJvcGVydHkiLCJxdWVyeURhdGEiLCJvdXQiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJ0YXJnZXQiLCJzZWxlY3QiLCJ1cGRhdGVTaWRlQ2FydCIsIiRzaWRlQ2FydCIsIiRzaWRlQ2FydERldGFpbHMiLCIkc2lkZUNhcnRBY3Rpb25zIiwiZGV0YWlscyIsImFjdGlvbnMiLCJpdGVtY291bnQiLCJ1dGlscyIsImNhcnQiLCJnZXRDb250ZW50IiwiaHRtbCIsIml0ZW1JbkNhcnQiLCJjc3MiLCJwb3B1cCIsInN0ciIsImRlbGF5IiwiJGFkZFBvcHVwIiwiZmFkZUluIiwiZmFkZU91dCIsImJsdXIiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsIiRhZGRUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcm9wIiwiY2xvc2VzdCIsImFkZENsYXNzIiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwicmVtb3ZlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImNhcnRPcHRpb25zIiwicmVzcCIsInRvb2xzIiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZUF2YWlsYWJsZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtSWQiLCJjYXJ0SXRlbXMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2FydEl0ZW0iLCJ2YWx1ZSIsIml0ZW1JZCIsInByb2R1Y3RJZCIsIml0ZW1RdHkiLCJxdWVyeVNlbGVjdG9yIiwiaXRlbVRleHRDb250YWluZXIiLCJpbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJyZXBvcnRWYWxpZGl0eSIsImlzVmFsaWRIVFRQTWV0aG9kIiwibWV0aG9kIiwiYWxsb3dlZE1ldGhvZHMiLCJvcHRzIiwicmVtb3RlIiwiZm9ybURhdGEiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3RlZFRlbXBsYXRlIiwidXNpbmdUZW1wbGF0ZXMiLCJ1c2luZ1NlY3Rpb25zIiwidGVtcGxhdGVzIiwicmVuZGVyX3dpdGgiLCJqb2luIiwiYWpheCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmV0Iiwia2V5cyIsIl9pIiwiX2tleXMiLCJjbGVhbktleSIsInRlbXBsYXRlVmFyaWFibGVOYW1lcyIsInRlbXBsYXRlVmFyaWFibGUiLCJfaTIiLCJfdGVtcGxhdGVWYXJpYWJsZU5hbWUiLCJYSFIiLCJ0ZXh0U3RhdHVzIiwic2lkZUNhcnQiLCJnZXRQYWdlSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0Q2FydEhlaWdodCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCIkZm9ybSIsIlN0aWNreSIsInJlcXVpcmUiLCJzdGlja3kiLCJ1cGRhdGVDYXJ0U2l6ZSIsImdldFBhZ2VUeXBlIiwid2lkdGgiLCJkZXN0cm95IiwidXBkYXRlIiwic2lkZUNhcnRQb3B1bGF0ZWRDaGVjayIsImF1dG9IaWdobGlnaHQiLCJ1cGRhdGVDYXJ0IiwiY291bnRlciIsInBhcmVudCIsImNoaWxkIiwiJHBvcHVwIiwicGFyZW50cyIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJ0aW1lb3V0IiwiYm91bmNlZCIsImNvbnRleHQiLCJsYXRlciIsInRpbWVkT3V0IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsImNhdGNoV2luZG93UmVzaXplIiwicmVzaXplIiwic2Nyb2xsIiwicHJvY2Vzc0Zvcm0iLCJ0YXJnZXRGb3JtIiwic2t1IiwicXR5IiwibmV3c2t1IiwicmVxdWVzdCIsInNjcmlwdFJlZ2V4IiwiY2xlYW5SZXNwb25zZSIsInRyaW0iLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkaXR5Iiwic3dhbCIsInN0ZXAiLCJ0eXBlIiwibmV3UXR5IiwicGFyc2VJbnQiLCJpdGVtVXBkYXRlIiwiZXJyb3JzIiwiY3VycmVudEVyciIsImVyck1heCIsImVyck1pbiIsImVyclN0b2NrIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwic3RhdHVzIiwiYWxlcnQiLCJkZWNyZW1lbnRDb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImNvbXBhcmUiLCJwcm9kdWN0cyIsIiRjaGVja2VkIiwiJGNvbXBhcmVMaW5rIiwiX21hcCIsImNvbXBhcmVDb3VudGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsInNob3dBbGVydE1vZGFsIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ3BCO0FBQUEsSUFFREEsV0FBVywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFlBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosV0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxXQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUM1QkUsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRTtJQUNsQixJQUFNQyxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBYSxDQUFDLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUNDLEtBQUss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Q0FBQztJQUUxRSxJQUFJNlIsaUJBQWlCLENBQUM5UixNQUFNLElBQUksQ0FBQyxFQUFFO01BQy9CK1IsNkRBQWMsQ0FBQyxrREFBa0QsQ0FBQztNQUNsRXpWLEtBQUssQ0FBQ2MsY0FBYyxDQUFDLENBQUM7SUFDMUI7RUFDSixDQUFDLENBQUM7RUFFRk4sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFNO0lBQy9DLElBQU1rTixvQkFBb0IsR0FBR2xWLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ21ELElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUVqRixJQUFJK1Isb0JBQW9CLENBQUNoUyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2xDK1IsNkRBQWMsQ0FBQyxrREFBa0QsQ0FBQztNQUNsRSxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTixDOzs7Ozs7Ozs7Ozs7QUN4RUEsZSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnZi9jYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyJyxcbiAgICAgICAgICAgIGNsZWFyRmFjZXRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGluaycsXG4gICAgICAgICAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgICAgICAgICAgZmFjZXROYXZMaXN0U2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAubmF2TGlzdCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2UnLFxuICAgICAgICAgICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgICAgICAgICBwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdJyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgICAgICAgICBzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJyxcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWFyayBpbml0aWFsbHkgY29sbGFwc2VkIGFjY29yZGlvbnNcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cy5wdXNoKGNvbGxhcHNpYmxlLnRhcmdldElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJy5uby1wcm9kdWN0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmZpbmQoJyA+IC5hY2NvcmRpb24tLW5hdkxpc3QnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIERPTSBldmVudHNcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHNlYXJjaEdvVG9Vcmw6ICgpID0+IHtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnaW5wdXRbdHlwZT10ZWxdJykub24oJ2ZvY3VzaW4gbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAkKGV2ZW50LnRhcmdldCkuc2VsZWN0KCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGl0ZW1JbkNhcnQgZnJvbSAnLi9jYXJkLWl0ZW0taW4tY2FydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVTaWRlQ2FydCgpIHtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0ID0gJCgnLnNpZGUtY2FydC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRzaWRlQ2FydERldGFpbHMgPSAkKCcuc2lkZS1jYXJ0LWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0QWN0aW9ucyA9ICQoJy5zaWRlLWNhcnQtYWN0aW9ucycpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogJ2YvYjJiL3NpZGUtY2FydC1hY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBpdGVtY291bnQ6ICdmL2NhcnQvaXRlbS1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJHNpZGVDYXJ0Lmh0bWwocmVzcG9uc2UudGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICRzaWRlQ2FydERldGFpbHMuaHRtbChyZXNwb25zZS5kZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAkc2lkZUNhcnRBY3Rpb25zLmh0bWwocmVzcG9uc2UuYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgJCgnLmNhcnQtcXVhbnRpdHknKS5odG1sKHJlc3BvbnNlLml0ZW1jb3VudCk7XG4gICAgICAgICAgICAgICAgaXRlbUluQ2FydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWxvYWRpbmcnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgJCgnLnNpZGUtY2FydC1pdGVtJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUG9wdXAgZnVuY3Rpb24gZm9yIGlucHV0IG5vdGlmaWNhdGlvblxuICAgIGZ1bmN0aW9uIHBvcHVwKHRhcmdldCwgc3RyLCBkZWxheSkge1xuICAgICAgICBjb25zdCAkYWRkUG9wdXAgPSAkKHRhcmdldCkuZmluZCgnLmFkZC1jYXJkLXBvcHVwJyk7XG5cbiAgICAgICAgJGFkZFBvcHVwLmh0bWwoYCR7c3RyfWApO1xuICAgICAgICAkYWRkUG9wdXAuZmFkZUluKDApLmRlbGF5KGRlbGF5KS5mYWRlT3V0KDApO1xuICAgICAgICAkKCd0YXJnZXQnKS5ibHVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICAkKCcuc2lkZS1jYXJ0LWxvYWRpbmcnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgJCgnLnNpZGUtY2FydC1pdGVtJykuY3NzKCdvcGFjaXR5JywgJzAuNScpO1xuXG4gICAgICAgIC8vIEdldCB0YXJnZXQgcHJvZHVjdFxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnLmJ1dHRvbi5idXR0b24tLXByaW1hcnkuYnV0dG9uLS1jYXJkQWRkJywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICRhZGRUb0NhcnRCdG4uY2xvc2VzdCgnLmZvcm0tY2FyZEFkZCcpLmFkZENsYXNzKCdob3ZlcmluZycpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChuZXcgRm9ybURhdGEoZm9ybSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0bi5jbG9zZXN0KCcuZm9ybS1jYXJkQWRkJykucmVtb3ZlQ2xhc3MoJ2hvdmVyaW5nJylcbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LnRhcmdldCwgZXJyb3JNZXNzYWdlLCA0MDAwKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlc3BvbnNlLmRhdGEuZGF0YS51cmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgICAgICAgICBwb3B1cChldmVudC50YXJnZXQsICdJdGVtIGFkZGVkJywgMjAwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcnRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnZi9jYXJ0L2l0ZW0tY291bnQnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChjYXJ0T3B0aW9ucywgKGVycm9yLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmNhcnQtcXVhbnRpdHknKS5odG1sKHJlc3ApO1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy50b29scy5zdG9yYWdlLmxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0LXF1YW50aXR5JywgcmVzcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZVNpZGVDYXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGQtZnJvbS1jYXJkXScpLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgICQoJy5mb3JtLWlucHV0Jykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZm9ybS1jYXJkQWRkJykuYWRkQ2xhc3MoJ2hvdmVyaW5nJyk7XG4gICAgfSk7XG5cbiAgICAkKCcuZm9ybS1pbnB1dCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5mb3JtLWNhcmRBZGQnKS5yZW1vdmVDbGFzcygnaG92ZXJpbmcnKTtcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZW1vdmVJdGVtSWQpIHtcbiAgICAvLyBEaXNwbGF5IG9uIHByb2R1Y3QgY2FyZCB0aGF0IHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8gY2FydFxuICAgIGNvbnN0IGNhcnRJdGVtcyA9ICQoJyNjYXJ0LXByZXZpZXctZHJvcGRvd24gLnNpZGUtY2FydC1pdGVtJyk7XG4gICAgZm9yIChjb25zdCBjYXJ0SXRlbSBvZiBjYXJ0SXRlbXMpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJChjYXJ0SXRlbSkuZmluZCgnW2RhdGEtcHJvZHVjdC1pZF0nKS5kYXRhKCkucHJvZHVjdElkO1xuICAgICAgICBjb25zdCBpdGVtUXR5ID0gY2FydEl0ZW0ucXVlcnlTZWxlY3RvcignW3ZhbHVlXScpLnZhbHVlO1xuICAgICAgICBjb25zdCBpdGVtVGV4dENvbnRhaW5lciA9ICQoJy5jYXJkJykuZmluZChgW2RhdGEtcXR5SW5DYXJ0PScke2l0ZW1JZH0nXWApO1xuICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgaXRlbVRleHRDb250YWluZXIuaHRtbChgWW91IGhhdmUgJHtpdGVtUXR5fSBpbiB5b3VyIGNhcnRgKTtcbiAgICB9XG5cbiAgICBpZiAocmVtb3ZlSXRlbUlkKSB7XG4gICAgICAgICQoJy5jYXJkJykuZmluZChgW2RhdGEtcXR5SW5DYXJ0PScke3JlbW92ZUl0ZW1JZH0nXWApLmh0bWwoJycpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQucmVwb3J0VmFsaWRpdHkgPT09ICdmdW5jdGlvbic7XG59XG4iLCIvKipcbiAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBtZXRob2QgcGFzc2VkIGluIGlzIHZhbGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRIVFRQTWV0aG9kKG1ldGhvZCkge1xuICAgIGNvbnN0IGFsbG93ZWRNZXRob2RzID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJ107XG5cbiAgICByZXR1cm4gYWxsb3dlZE1ldGhvZHMuaW5kZXhPZihtZXRob2QpICE9PSAtMTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsLCBvcHRzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZW1vdGU6IGZhbHNlLFxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xuICAgICAgICAgICAgZm9ybURhdGE6IG51bGwsXG4gICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgY29uZmlnOiB7fSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBbXSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0cyk7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmZvcm1EYXRhIDogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5wYXJhbXM7XG4gICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5jb25maWcgPyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZykgOiAne30nLFxuICAgICAgICAnc3RlbmNpbC1vcHRpb25zJzogJ3t9JyxcbiAgICB9O1xuICAgIGNvbnN0IHJlcXVlc3RlZFRlbXBsYXRlID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy50ZW1wbGF0ZTtcblxuICAgIGxldCB1c2luZ1RlbXBsYXRlcyA9IGZhbHNlO1xuICAgIGxldCB1c2luZ1NlY3Rpb25zID0gZmFsc2U7XG4gICAgbGV0IHRlbXBsYXRlcyA9IFtdO1xuXG5cbiAgICAvLyBOb3QgYSB2YWxpZCBtZXRob2RcbiAgICBpZiAoIWlzVmFsaWRIVFRQTWV0aG9kKG9wdGlvbnMubWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCdOb3QgYSB2YWxpZCBIVFRQIG1ldGhvZCcpKTtcbiAgICB9XG5cblxuICAgIGlmICh0eXBlb2YgKHJlcXVlc3RlZFRlbXBsYXRlKSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVxdWVzdGVkVGVtcGxhdGUpKSB7XG4gICAgICAgIGxldCB0ZW1wbGF0ZTtcblxuICAgICAgICB1c2luZ1NlY3Rpb25zID0gdHJ1ZTtcbiAgICAgICAgdGVtcGxhdGVzID0gW107XG5cbiAgICAgICAgZm9yICh0ZW1wbGF0ZSBpbiByZXF1ZXN0ZWRUZW1wbGF0ZSkge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RlZFRlbXBsYXRlLmhhc093blByb3BlcnR5KHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5wdXNoKHJlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAocmVxdWVzdGVkVGVtcGxhdGUpID09PSAnc3RyaW5nJykge1xuICAgICAgICB0ZW1wbGF0ZXMgPSBbcmVxdWVzdGVkVGVtcGxhdGVdO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWRUZW1wbGF0ZSkgJiYgcmVxdWVzdGVkVGVtcGxhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICB0ZW1wbGF0ZXMgPSByZXF1ZXN0ZWRUZW1wbGF0ZTtcbiAgICB9XG5cbiAgICBpZiAodGVtcGxhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdXNpbmdUZW1wbGF0ZXMgPSB0cnVlO1xuXG4gICAgICAgIGhlYWRlcnNbJ3N0ZW5jaWwtb3B0aW9ucyddID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcmVuZGVyX3dpdGg6IHRlbXBsYXRlcy5qb2luKCcsJyksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIG1ha2UgYWpheCByZXF1ZXN0IHVzaW5nIGpxdWVyeVxuICAgICQuYWpheCh7XG4gICAgICAgIG1ldGhvZDogb3B0aW9ucy5tZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgY29udGVudFR5cGU6IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgPyBmYWxzZSA6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICBwcm9jZXNzRGF0YTogIW9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJldDtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBvcHRpb25zLnJlbW90ZSA/IHJlc3BvbnNlLmNvbnRlbnQgOiByZXNwb25zZTtcblxuICAgICAgICAgICAgaWYgKHVzaW5nVGVtcGxhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBgY29tcG9uZW50c2AgcHJlZml4IGZyb20gdGhlIHJlc3BvbnNlIGlmIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoY29udGVudCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbktleSA9IGtleS5yZXBsYWNlKC9eY29tcG9uZW50c1xcLy8sICcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFtjbGVhbktleV0gPSBjb250ZW50W2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgKGNvbnRlbnRba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB1c2luZyBcInNlY3Rpb25zXCIsIG1vcnBoIHRoZSBjb250ZW50IGludG8gdGhlIGFyYml0cmFyeSBrZXlzID0+IGNvbnRlbnQgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh1c2luZ1NlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlVmFyaWFibGVOYW1lcyA9IE9iamVjdC5rZXlzKHJlcXVlc3RlZFRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlVmFyaWFibGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodGVtcGxhdGVWYXJpYWJsZSBvZiB0ZW1wbGF0ZVZhcmlhYmxlTmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRbdGVtcGxhdGVWYXJpYWJsZV0gPSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb250ZW50W3JlcXVlc3RlZFRlbXBsYXRlW3RlbXBsYXRlVmFyaWFibGVdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnJlbW90ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0LmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXQgPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmV0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChYSFIsIHRleHRTdGF0dXMsIGVycikgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaGVhZGVycyxcbiAgICB9KTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IGF1dG9IaWdobGlnaHQgZnJvbSAnLi9hdXRvLWhpZ2hsaWdodCc7XG5pbXBvcnQgaXRlbUluQ2FydCBmcm9tICcuL2NhcmQtaXRlbS1pbi1jYXJ0JztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5pbXBvcnQgdmFsaWRpdHkgZnJvbSAnLi9jaGVjay12YWxpZGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGVDYXJ0KCkge1xuICAgIC8vIFNldCB1cCB0aGUgbXV0YWJsZSBwYWdlIGhlaWdodCBieSBncmFiYmluZyBpdCBhbmQgdGhlIGNhcnQgaGVpZ2h0IHRoZW4gbW9kaWZ5aW5nIGJhc2VkIG9uIG9uZSBhbm90aGVyXG4gICAgLy8gQWxzbyBncmFiIHZpZXdwb3J0IGhlaWdodCBzbyB3ZSBjYW4gY3JlYXRlIGEgc2Nyb2xsYWJsZSBpbm5lciBlbGVtZW50XG4gICAgbGV0IGdldFBhZ2VIZWlnaHQgPSAkKCcucGFnZScpLmhlaWdodCgpO1xuICAgIGxldCBnZXRDYXJ0SGVpZ2h0ID0gJCgnLnNpZGUtY2FydCcpLmhlaWdodCgpO1xuXG4gICAgLy8gT25seSBtdXQgdGhlIGhlaWdodCBvZiBlbGVtZW50cyBpZiBub3Qgb24gYSBtb2JpbGUgZGV2aWNlXG4gICAgaWYgKCEvTW9iaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgJCgnI3NpZGUtY2FydC1jb250YWluZXIgLnNpZGUtY2FydC1jb250YWluZXInKS5jc3MoJ2hlaWdodCcsIGdldFBhZ2VIZWlnaHQpO1xuICAgIH1cblxuICAgIC8vIFF1aWNrLUFkZCBTS1UgaGFuZGxlclxuICAgIGNvbnN0ICRmb3JtID0gJCgnLnF1aWNrLWFkZCcpO1xuXG4gICAgLy8gU2V0IHVwIHRoZSBzdGlja3ktbmVzcyBvZiB0aGUgc2lkZS1jYXJ0XG4gICAgY29uc3QgU3RpY2t5ID0gcmVxdWlyZSgnc3RpY2t5LWpzJyk7XG4gICAgY29uc3Qgc3RpY2t5ID0gbmV3IFN0aWNreSgnI3NpZGUtY2FydC1jb250YWluZXInKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY2FydCBzaXplL2RpbWVuc2lvbnMgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0U2l6ZSgpIHtcbiAgICAgICAgLy8gTXV0IHRoZSBwYWdlIGhlaWdodCB0byBiZXR0ZXIgY29udGFpbiB0aGUgc2lkZS1jYXJ0XG4gICAgICAgIGdldFBhZ2VIZWlnaHQgPSAkKCcucGFnZScpLmhlaWdodCgpO1xuICAgICAgICBnZXRDYXJ0SGVpZ2h0ID0gJCgnI3NpZGUtY2FydC1jb250YWluZXInKS5oZWlnaHQoKTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgZGF0YS1zdGlja3ktY29udGlhbmVyIHRhZyB0byBtYWtlIHN1cmUgd2Ugc2hvdWxkIG11dCB0aGUgcGFnZVxuICAgICAgICBjb25zdCBnZXRQYWdlVHlwZSA9ICQoJy5wYWdlJykuYXR0cignZGF0YS1zdGlja3ktY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKGdldFBhZ2VUeXBlICYmICgkKHdpbmRvdykud2lkdGgoKSA+IDEyNjApKSB7XG4gICAgICAgICAgICBpZiAoZ2V0UGFnZUhlaWdodCA8IDY4NSkge1xuICAgICAgICAgICAgICAgIHN0aWNreS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChnZXRDYXJ0SGVpZ2h0ID4gNjg1ICYmIGdldFBhZ2VIZWlnaHQgPCA3MzQpIHtcbiAgICAgICAgICAgICAgICAkKCcucGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0JywgZ2V0Q2FydEhlaWdodCArIDQ5KTtcbiAgICAgICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWNvbnRhaW5lcicpLmNzcygnbWluLWhlaWdodCcsIGdldENhcnRIZWlnaHQgKyAyNik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZ2V0Q2FydEhlaWdodCA+IGdldFBhZ2VIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgICQoJyNzaWRlLWNhcnQtY29udGFpbmVyIC5zaWRlLWNhcnQtY29udGFpbmVyJykuY3NzKCdtaW4taGVpZ2h0JywgZ2V0Q2FydEhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBnZXRDYXJ0SGVpZ2h0ICsgNDApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICAkKCcucGFnZS1jb250ZW50JykuY3NzKCdtaW4taGVpZ2h0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHN0aWNreS51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIGxpbmUgY3V0cyBvdXQgYSBmaXZlIGxpbmUgZWxzZS1pZi4gSXQncyBub3QgbWVhbnQgdG8gYmUgY2FsbGVkIGFmdGVyIGJlaW5nIGNyZWF0ZWQsIGp1c3QgaW52b2tlZCB1cG9uIGJpcnRoLlxuICAgICAgICBjb25zdCBzaWRlQ2FydFBvcHVsYXRlZENoZWNrID0gKCEkKCcuc2lkZS1jYXJ0LWl0ZW0nKS50ZXh0KCkpID8gJCgnLnNpZGUtY2FydC1wbGFjZWhvbGRlcicpLmNzcygnZGlzcGxheScsICdibG9jaycpIDogZmFsc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICAgICBhdXRvSGlnaGxpZ2h0KCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gdXBkYXRlQ2FydCgpIHtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0ID0gJCgnLnNpZGUtY2FydC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRzaWRlQ2FydERldGFpbHMgPSAkKCcuc2lkZS1jYXJ0LWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0QWN0aW9ucyA9ICQoJy5zaWRlLWNhcnQtYWN0aW9ucycpO1xuXG4gICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMC41Jyk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2YvYjJiL3NpZGUtY2FydC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiAnZi9iMmIvc2lkZS1jYXJ0LWRldGFpbHMnLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6ICdmL2IyYi9zaWRlLWNhcnQtYWN0aW9ucycsXG4gICAgICAgICAgICAgICAgY291bnRlcjogJ2YvY2FydC9pdGVtLWNvdW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJHNpZGVDYXJ0Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICAkc2lkZUNhcnREZXRhaWxzLmh0bWwocmVzcG9uc2UuZGV0YWlscyk7XG4gICAgICAgICAgICAkc2lkZUNhcnRBY3Rpb25zLmh0bWwocmVzcG9uc2UuYWN0aW9ucyk7XG4gICAgICAgICAgICAkKCcuY2FydC1xdWFudGl0eScpLmh0bWwocmVzcG9uc2UuY291bnRlcik7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgbGluZSBjdXRzIG91dCBhIGZpdmUgbGluZSBlbHNlLWlmLiBJdCdzIG5vdCBtZWFudCB0byBiZSBjYWxsZWQgYWZ0ZXIgYmVpbmcgY3JlYXRlZCwganVzdCBpbnZva2VkIHVwb24gYmlydGguXG4gICAgICAgICAgICBjb25zdCBzaWRlQ2FydFBvcHVsYXRlZENoZWNrID0gKCEkKCcuc2lkZS1jYXJ0LWl0ZW0nKS50ZXh0KCkpID8gJCgnLnNpZGUtY2FydC1wbGFjZWhvbGRlcicpLmNzcygnZGlzcGxheScsICdibG9jaycpIDogZmFsc2U7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcmVzcG9uc2UuY291bnRlcik7XG5cbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgaXRlbUluQ2FydCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1cGRhdGVDYXJ0U2l6ZSgpO1xuICAgIH1cblxuICAgIC8vIFBvcHVwIGZ1bmN0aW9uIGZvciBpbnB1dCBub3RpZmljYXRpb25cbiAgICBmdW5jdGlvbiBwb3B1cCh0YXJnZXQsIHBhcmVudCwgY2hpbGQsIHN0ciwgZGVsYXkpIHtcbiAgICAgICAgY29uc3QgJHBvcHVwID0gJCh0YXJnZXQpLnBhcmVudHMoYCR7cGFyZW50fWApLmZpbmQoYCR7Y2hpbGR9YCk7XG5cbiAgICAgICAgJHBvcHVwLmh0bWwoYCR7c3RyfWApO1xuICAgICAgICAkcG9wdXAuZmFkZUluKDApLmRlbGF5KGRlbGF5KS5mYWRlT3V0KDApO1xuICAgIH1cblxuICAgIC8vIERlYm91bmNlciBmdWNudGlvbiB0byBzdG9wIG11dCBjYXRjaGluZyBzcGFtXG4gICAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlLCAuLi5hcmdzKSB7XG4gICAgICAgIGxldCB0aW1lb3V0O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gYm91bmNlZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbiB0aW1lZE91dCgpIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU2V0dXAgYSBsaXN0ZW5lciBmb3Igd2luZG93IHJlc2l6aW5nL3Njcm9sbGluZyB0byBoZWxwIGtlZXAgc2lkZS1jYXJ0IGJvdW5kYXJpZXMgY29tcGxpYW50XG4gICAgY29uc3QgY2F0Y2hXaW5kb3dSZXNpemUgPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNhcnRTaXplKCk7XG4gICAgfSwgMzUwKTtcblxuICAgICQod2luZG93KS5yZXNpemUoY2F0Y2hXaW5kb3dSZXNpemUpO1xuICAgICQod2luZG93KS5zY3JvbGwoY2F0Y2hXaW5kb3dSZXNpemUpO1xuXG4gICAgLy8gQmluZCB0aGUgcXVpY2sgYWRkIFNLVSBidXR0b25cbiAgICBmdW5jdGlvbiBwcm9jZXNzRm9ybShldmVudCwgZm9ybSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBjb25zdCB0YXJnZXRGb3JtID0gZm9ybTtcbiAgICAgICAgY29uc3Qgc2t1ID0gJCh0YXJnZXRGb3JtKS5maW5kKCdbZGF0YS1za3VdJyk7XG4gICAgICAgIGNvbnN0IHF0eSA9ICQodGFyZ2V0Rm9ybSkuZmluZCgnW2RhdGEtcXR5XScpO1xuICAgICAgICBjb25zdCB1cmwgPSBgL2NhcnQucGhwP2FjdGlvbj1hZGQmc2t1PSR7c2t1LnZhbCgpfSZxdHk9JHtxdHkudmFsKCl9YDtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogJ2YvYjJiL3F1aWNrLWFkZC1yZXNwb25zZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2YvYjJiL3NpZGUtY2FydC1jb250ZW50JyxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiAnZi9iMmIvc2lkZS1jYXJ0LWRldGFpbHMnLFxuICAgICAgICAgICAgICAgIG5ld3NrdTogJ2YvYjJiL3NpZGUtY2FydC1xdWljay1hZGQtc2t1JyxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiAnZi9jYXJ0L2l0ZW0tY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc2t1LnZhbCgpICYmIHF0eS52YWwoKSkge1xuICAgICAgICAgICAgcmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0T3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0UmVnZXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGVhblJlc3BvbnNlID0gcmVzcG9uc2UuZXJyb3IucmVwbGFjZShzY3JpcHRSZWdleCwgJycpLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNsZWFuUmVzcG9uc2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2lkZS1jYXJ0LXNrdS1hZGQnLCAnLmFkZC1zaWRlLWNhcnQtc2t1LWl0ZW0nLCBjbGVhblJlc3BvbnNlLCA0MDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHJlc3BvbnNlLmNvdW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBUbyBhZGQgbGFuZyBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtc2t1LWFkZCcsICcuYWRkLXNpZGUtY2FydC1za3UtaXRlbScsIGAke3F0eS52YWwoKX0gJnRpbWVzICR7c2t1LnZhbCgpfSBBZGRlZCB0byBDYXJ0YCwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2t1LnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgcXR5LnZhbCgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtc2t1LWFkZCcsICcuYWRkLXNpZGUtY2FydC1za3UtaXRlbScsICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZXJyb3InKSwgMjAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDYXJ0U2l6ZSgpO1xuICAgIH1cblxuICAgICRmb3JtLm9uKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgcHJvY2Vzc0Zvcm0oZXZlbnQsIGV2ZW50LnRhcmdldCk7XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgYSBwcm9kdWN0IHF1YW50aXR5XG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuc2lkZS1jYXJ0LWl0ZW0tcXR5LWlucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghaXNWYWxpZC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGl0eSkge1xuICAgICAgICAgICAgICAgIGlzVmFsaWQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogYFBsZWFzZSBlbnRlciBhIHZhbGlkIHF1YW50aXR5IChtdWx0aXBsZXMgb2YgJHtpc1ZhbGlkLnN0ZXB9KWAsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2lkJykuc3Vic3RyaW5nKDQpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludCgkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLCAxMCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RXJyID0gcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignL24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJNYXggPSBjdXJyZW50RXJyLnNlYXJjaCgvbWF4aW11bS9pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJNaW4gPSBjdXJyZW50RXJyLnNlYXJjaCgvbWluaW11bS9pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJTdG9jayA9IGN1cnJlbnRFcnIuc2VhcmNoKC9lbm91Z2gvaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyTWF4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1pdGVtLWluZm8nLCAnLmNoYW5nZS1zaWRlLWNhcnQtcXR5JywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdxdWFudGl0eS1tYXgtZXJyb3InKSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJNaW4gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2lkZS1jYXJ0LWl0ZW0taW5mbycsICcuY2hhbmdlLXNpZGUtY2FydC1xdHknLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3F1YW50aXR5LW1pbi1lcnJvcicpLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVyclN0b2NrICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1pdGVtLWluZm8nLCAnLmNoYW5nZS1zaWRlLWNhcnQtcXR5JywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdzdG9jay1lcnJvcicpLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1pdGVtLWluZm8nLCAnLmNoYW5nZS1zaWRlLWNhcnQtcXR5JywgY3VycmVudEVyciwgMjAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1dG9IaWdobGlnaHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gdGhlIGNhcnQgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQsIHByb2R1Y3RJZCkge1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkgeyAvLyBDYXRjaCBmb3IgaWYgeW91IHRyeSB0byByZW1vdmUgdGhlIGl0ZW0gYmVmb3JlIHRoZSBjYXJ0IGhhcyBiZWVuIHVwZGF0ZWQgd2l0aCBpdCBzZXJ2ZXItc2lkZVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbUluQ2FydChwcm9kdWN0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBjYXJ0IHRyaWdnZXJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcnQtcmVtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydC1pdGVtaWQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyk7XG4gICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCwgcHJvZHVjdElkKTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBldmVyeXRoaW5nXG4gICAgdXBkYXRlQ2FydCgpO1xufVxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBwcm9kdWN0cztcblxuICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgaWYgKCRjaGVja2VkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBwcm9kdWN0cyA9IF8ubWFwKCRjaGVja2VkLCBlbGVtZW50ID0+IGVsZW1lbnQudmFsdWUpO1xuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYocHJvZHVjdHMsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29tcGFyZUNvdW50ZXIgPSBwcm9kdWN0cyB8fCBbXTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9