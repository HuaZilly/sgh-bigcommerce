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
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");













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
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

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
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])();

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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
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
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(facetUrl, {
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
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);
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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
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
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href);
    var queryParams = decodeURI($(currentTarget).serialize());
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
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
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _card_item_in_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-item-in-cart */ "./assets/js/theme/f/card-item-in-cart.js");



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
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(options, function (err, response) {
      if (response.itemcount > 0) {
        $sideCart.html(response.template);
        $sideCartDetails.html(response.details);
        $sideCartActions.html(response.actions);
        $('.cart-quantity').html(response.itemcount);
        Object(_card_item_in_cart__WEBPACK_IMPORTED_MODULE_2__["default"])();
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

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(new FormData(form), function (err, response) {
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false);

      // Guard statement
      if (errorMessage) {
        popup(event.target, errorMessage, 4000);
      } else {
        // To add lang string
        popup(event.target, 'Item added', 2000);
      }
      var cartOptions = {
        template: 'f/cart/item-count'
      };
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent(cartOptions, function (error, resp) {
        $('.cart-quantity').html(resp);
        if (_bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].tools.storage.localStorageAvailable()) {
          localStorage.setItem('cart-quantity', resp);
        }
      });
      updateSideCart();
    });
  }
  $('[data-cart-item-add-from-card]').on('submit', function (event) {
    addProductToCart(event, event.target);
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

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9mL2F1dG8taGlnaGxpZ2h0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9mL2NhcmQtYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2FyZC1pdGVtLWluLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvY2hlY2stdmFsaWRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2YvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZi9zaWRlLWNhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3V0aWwuaW5zcGVjdCAoaWdub3JlZCkiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiRmFjZXRlZFNlYXJjaCIsInJlcXVlc3RPcHRpb25zIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiX3RoaXMiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsIl9leHRlbmQiLCJjb2xsYXBzZWRGYWNldHMiLCJjb2xsYXBzZWRGYWNldEl0ZW1zIiwiY29sbGFwc2libGVGYWN0b3J5IiwiaW5pdFByaWNlVmFsaWRhdG9yIiwiZWFjaCIsImluZGV4IiwibmF2TGlzdCIsImNvbGxhcHNlRmFjZXRJdGVtcyIsImFjY29yZGlvblRvZ2dsZSIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzaWJsZSIsImRhdGEiLCJpc0NvbGxhcHNlZCIsInB1c2giLCJ0YXJnZXRJZCIsInNldFRpbWVvdXQiLCJpcyIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25wb3BzdGF0ZSIsInRyaWdnZXIiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJfdGhpczIiLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX2luY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwibGVuZ3RoIiwidmFsaWRhdG9yIiwibm9kIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRNaW5NYXhQcmljZVZhbGlkYXRpb24iLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvbiIsImRvY3VtZW50IiwiaG9va3MiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInNlYXJjaEdvVG9VcmwiLCJyZXBsYWNlUGFyYW1zIiwicGFyc2VkIiwicGFyYW0iLCJoYXNPd25Qcm9wZXJ0eSIsInF1ZXJ5RGF0YSIsIm91dCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsInRhcmdldCIsInNlbGVjdCIsInVwZGF0ZVNpZGVDYXJ0IiwiJHNpZGVDYXJ0IiwiJHNpZGVDYXJ0RGV0YWlscyIsIiRzaWRlQ2FydEFjdGlvbnMiLCJkZXRhaWxzIiwiYWN0aW9ucyIsIml0ZW1jb3VudCIsInV0aWxzIiwiY2FydCIsImdldENvbnRlbnQiLCJodG1sIiwiaXRlbUluQ2FydCIsImNzcyIsInBvcHVwIiwic3RyIiwiZGVsYXkiLCIkYWRkUG9wdXAiLCJmaW5kIiwiZmFkZUluIiwiZmFkZU91dCIsImJsdXIiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiZm9ybSIsIiRhZGRUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwiRm9ybURhdGEiLCJ1bmRlZmluZWQiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcm9wIiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiY2FydE9wdGlvbnMiLCJyZXNwIiwidG9vbHMiLCJzdG9yYWdlIiwibG9jYWxTdG9yYWdlQXZhaWxhYmxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW1JZCIsImNhcnRJdGVtcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJjYXJ0SXRlbSIsInZhbHVlIiwiaXRlbUlkIiwicHJvZHVjdElkIiwiaXRlbVF0eSIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtVGV4dENvbnRhaW5lciIsImlucHV0IiwiY3JlYXRlRWxlbWVudCIsInJlcG9ydFZhbGlkaXR5IiwiaXNWYWxpZEhUVFBNZXRob2QiLCJtZXRob2QiLCJhbGxvd2VkTWV0aG9kcyIsIm9wdHMiLCJyZW1vdGUiLCJmb3JtRGF0YSIsImNvbmZpZyIsIk9iamVjdCIsImFzc2lnbiIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdGVkVGVtcGxhdGUiLCJ1c2luZ1RlbXBsYXRlcyIsInVzaW5nU2VjdGlvbnMiLCJ0ZW1wbGF0ZXMiLCJyZW5kZXJfd2l0aCIsImpvaW4iLCJhamF4IiwiY29udGVudFR5cGUiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXQiLCJrZXlzIiwiX2kiLCJfa2V5cyIsImNsZWFuS2V5IiwicmVwbGFjZSIsInRlbXBsYXRlVmFyaWFibGVOYW1lcyIsInRlbXBsYXRlVmFyaWFibGUiLCJfaTIiLCJfdGVtcGxhdGVWYXJpYWJsZU5hbWUiLCJYSFIiLCJ0ZXh0U3RhdHVzIiwic2lkZUNhcnQiLCJnZXRQYWdlSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0Q2FydEhlaWdodCIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCIkZm9ybSIsIlN0aWNreSIsInJlcXVpcmUiLCJzdGlja3kiLCJ1cGRhdGVDYXJ0U2l6ZSIsImdldFBhZ2VUeXBlIiwid2lkdGgiLCJkZXN0cm95IiwidXBkYXRlIiwic2lkZUNhcnRQb3B1bGF0ZWRDaGVjayIsImF1dG9IaWdobGlnaHQiLCJ1cGRhdGVDYXJ0IiwiY291bnRlciIsInBhcmVudCIsImNoaWxkIiwiJHBvcHVwIiwicGFyZW50cyIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJfbGVuIiwiYXJncyIsIl9rZXkiLCJ0aW1lb3V0IiwiYm91bmNlZCIsImNvbnRleHQiLCJsYXRlciIsInRpbWVkT3V0IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsImNhdGNoV2luZG93UmVzaXplIiwicmVzaXplIiwic2Nyb2xsIiwicHJvY2Vzc0Zvcm0iLCJ0YXJnZXRGb3JtIiwic2t1IiwicXR5IiwibmV3c2t1IiwicmVxdWVzdCIsInNjcmlwdFJlZ2V4IiwiY2xlYW5SZXNwb25zZSIsInRyaW0iLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkaXR5Iiwic3dhbCIsInN0ZXAiLCJ0eXBlIiwibmV3UXR5IiwicGFyc2VJbnQiLCJpdGVtVXBkYXRlIiwiZXJyb3JzIiwiY3VycmVudEVyciIsImVyck1heCIsImVyck1pbiIsImVyclN0b2NrIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwic3RhdHVzIiwiYWxlcnQiLCJkZWNyZW1lbnRDb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImFkZENsYXNzIiwiY29tcGFyZSIsInJlbW92ZUNsYXNzIiwicHJvZHVjdHMiLCIkY2hlY2tlZCIsIiRjb21wYXJlTGluayIsIl9tYXAiLCJjb21wYXJlQ291bnRlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiR0aGlzIiwicHJvZHVjdHNUb0NvbXBhcmUiLCJzaG93QWxlcnRNb2RhbCIsIiRjbGlja2VkQ2hlY2tlZElucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQztBQUNwQjtBQUFBLElBRURBLFdBQVcsMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxZQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLFdBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsV0FBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDNUJFLGNBQWMsR0FBZCxTQUFBQSxlQUFlQyxLQUFLLEVBQUU7SUFDbEIsSUFBTUMsR0FBRyxHQUFHQywwQ0FBRyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDUixLQUFLLENBQUNTLGFBQWEsQ0FBQyxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRWpFVixHQUFH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SyxFQUFJO0lBQ3RELElBQU1vVixLQUFLLEdBQUc1VSxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBYSxDQUFDO0lBQ3BDLElBQU00VSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDOUosSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRTFFLElBQUkrSixpQkFBaUIsQ0FBQy9OLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDL0JnTyw2REFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFdFYsS0FBSyxDQUFDYyxjQUFjLENBQUMsQ0FBQztJQUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMrSCxFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTWdOLG9CQUFvQixHQUFHL1UsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEssSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUlpSyxvQkFBb0IsQ0FBQ2pPLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbENnTyw2REFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOLEM7Ozs7Ozs7Ozs7OztBQ3hFQSxlIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIERPTSBldmVudHNcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHNlYXJjaEdvVG9Vcmw6ICgpID0+IHtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnaW5wdXRbdHlwZT10ZWxdJykub24oJ2ZvY3VzaW4gbW91c2V1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAkKGV2ZW50LnRhcmdldCkuc2VsZWN0KCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IGl0ZW1JbkNhcnQgZnJvbSAnLi9jYXJkLWl0ZW0taW4tY2FydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVTaWRlQ2FydCgpIHtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0ID0gJCgnLnNpZGUtY2FydC1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRzaWRlQ2FydERldGFpbHMgPSAkKCcuc2lkZS1jYXJ0LWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0QWN0aW9ucyA9ICQoJy5zaWRlLWNhcnQtYWN0aW9ucycpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogJ2YvYjJiL3NpZGUtY2FydC1hY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBpdGVtY291bnQ6ICdmL2NhcnQvaXRlbS1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pdGVtY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgJHNpZGVDYXJ0Lmh0bWwocmVzcG9uc2UudGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICRzaWRlQ2FydERldGFpbHMuaHRtbChyZXNwb25zZS5kZXRhaWxzKTtcbiAgICAgICAgICAgICAgICAkc2lkZUNhcnRBY3Rpb25zLmh0bWwocmVzcG9uc2UuYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgJCgnLmNhcnQtcXVhbnRpdHknKS5odG1sKHJlc3BvbnNlLml0ZW1jb3VudCk7XG4gICAgICAgICAgICAgICAgaXRlbUluQ2FydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWxvYWRpbmcnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgJCgnLnNpZGUtY2FydC1pdGVtJykuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUG9wdXAgZnVuY3Rpb24gZm9yIGlucHV0IG5vdGlmaWNhdGlvblxuICAgIGZ1bmN0aW9uIHBvcHVwKHRhcmdldCwgc3RyLCBkZWxheSkge1xuICAgICAgICBjb25zdCAkYWRkUG9wdXAgPSAkKHRhcmdldCkuZmluZCgnLmFkZC1jYXJkLXBvcHVwJyk7XG5cbiAgICAgICAgJGFkZFBvcHVwLmh0bWwoYCR7c3RyfWApO1xuICAgICAgICAkYWRkUG9wdXAuZmFkZUluKDApLmRlbGF5KGRlbGF5KS5mYWRlT3V0KDApO1xuICAgICAgICAkKCd0YXJnZXQnKS5ibHVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICAkKCcuc2lkZS1jYXJ0LWxvYWRpbmcnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgJCgnLnNpZGUtY2FydC1pdGVtJykuY3NzKCdvcGFjaXR5JywgJzAuNScpO1xuXG4gICAgICAgIC8vIEdldCB0YXJnZXQgcHJvZHVjdFxuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnLmJ1dHRvbi5idXR0b24tLXByaW1hcnkuYnV0dG9uLS1jYXJkQWRkJywgJChldmVudC50YXJnZXQpKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcblxuICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtbG9hZGluZycpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAkKCcuc2lkZS1jYXJ0LWl0ZW0nKS5jc3MoJ29wYWNpdHknLCAnMScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZChuZXcgRm9ybURhdGEoZm9ybSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBwb3B1cChldmVudC50YXJnZXQsIGVycm9yTWVzc2FnZSwgNDAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LnRhcmdldCwgJ0l0ZW0gYWRkZWQnLCAyMDAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY2FydE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdmL2NhcnQvaXRlbS1jb3VudCcsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KGNhcnRPcHRpb25zLCAoZXJyb3IsIHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuY2FydC1xdWFudGl0eScpLmh0bWwocmVzcCk7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLnRvb2xzLnN0b3JhZ2UubG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQtcXVhbnRpdHknLCByZXNwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdXBkYXRlU2lkZUNhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnW2RhdGEtY2FydC1pdGVtLWFkZC1mcm9tLWNhcmRdJykub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBhZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCBldmVudC50YXJnZXQpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlbW92ZUl0ZW1JZCkge1xuICAgIC8vIERpc3BsYXkgb24gcHJvZHVjdCBjYXJkIHRoYXQgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byBjYXJ0XG4gICAgY29uc3QgY2FydEl0ZW1zID0gJCgnI2NhcnQtcHJldmlldy1kcm9wZG93biAuc2lkZS1jYXJ0LWl0ZW0nKTtcbiAgICBmb3IgKGNvbnN0IGNhcnRJdGVtIG9mIGNhcnRJdGVtcykge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGNhcnRJdGVtKS5maW5kKCdbZGF0YS1wcm9kdWN0LWlkXScpLmRhdGEoKS5wcm9kdWN0SWQ7XG4gICAgICAgIGNvbnN0IGl0ZW1RdHkgPSBjYXJ0SXRlbS5xdWVyeVNlbGVjdG9yKCdbdmFsdWVdJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGl0ZW1UZXh0Q29udGFpbmVyID0gJCgnLmNhcmQnKS5maW5kKGBbZGF0YS1xdHlJbkNhcnQ9JyR7aXRlbUlkfSddYCk7XG4gICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICBpdGVtVGV4dENvbnRhaW5lci5odG1sKGBZb3UgaGF2ZSAke2l0ZW1RdHl9IGluIHlvdXIgY2FydGApO1xuICAgIH1cblxuICAgIGlmIChyZW1vdmVJdGVtSWQpIHtcbiAgICAgICAgJCgnLmNhcmQnKS5maW5kKGBbZGF0YS1xdHlJbkNhcnQ9JyR7cmVtb3ZlSXRlbUlkfSddYCkuaHRtbCgnJyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmV0dXJuIHR5cGVvZiBpbnB1dC5yZXBvcnRWYWxpZGl0eSA9PT0gJ2Z1bmN0aW9uJztcbn1cbiIsIi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IG1ldGhvZCBwYXNzZWQgaW4gaXMgdmFsaWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZEhUVFBNZXRob2QobWV0aG9kKSB7XG4gICAgY29uc3QgYWxsb3dlZE1ldGhvZHMgPSBbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdERUxFVEUnXTtcblxuICAgIHJldHVybiBhbGxvd2VkTWV0aG9kcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmwsIG9wdHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIHJlbW90ZTogZmFsc2UsXG4gICAgICAgIHJlcXVlc3RPcHRpb25zOiB7XG4gICAgICAgICAgICBmb3JtRGF0YTogbnVsbCxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBjb25maWc6IHt9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IFtdLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRzKTtcbiAgICBjb25zdCBkYXRhID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA/IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuZm9ybURhdGEgOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnBhcmFtcztcbiAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAnc3RlbmNpbC1jb25maWcnOiBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmNvbmZpZyA/IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuY29uZmlnKSA6ICd7fScsXG4gICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxuICAgIH07XG4gICAgY29uc3QgcmVxdWVzdGVkVGVtcGxhdGUgPSBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnRlbXBsYXRlO1xuXG4gICAgbGV0IHVzaW5nVGVtcGxhdGVzID0gZmFsc2U7XG4gICAgbGV0IHVzaW5nU2VjdGlvbnMgPSBmYWxzZTtcbiAgICBsZXQgdGVtcGxhdGVzID0gW107XG5cblxuICAgIC8vIE5vdCBhIHZhbGlkIG1ldGhvZFxuICAgIGlmICghaXNWYWxpZEhUVFBNZXRob2Qob3B0aW9ucy5tZXRob2QpKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIEhUVFAgbWV0aG9kJykpO1xuICAgIH1cblxuXG4gICAgaWYgKHR5cGVvZiAocmVxdWVzdGVkVGVtcGxhdGUpID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShyZXF1ZXN0ZWRUZW1wbGF0ZSkpIHtcbiAgICAgICAgbGV0IHRlbXBsYXRlO1xuXG4gICAgICAgIHVzaW5nU2VjdGlvbnMgPSB0cnVlO1xuICAgICAgICB0ZW1wbGF0ZXMgPSBbXTtcblxuICAgICAgICBmb3IgKHRlbXBsYXRlIGluIHJlcXVlc3RlZFRlbXBsYXRlKSB7XG4gICAgICAgICAgICBpZiAocmVxdWVzdGVkVGVtcGxhdGUuaGFzT3duUHJvcGVydHkodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGVzLnB1c2gocmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIChyZXF1ZXN0ZWRUZW1wbGF0ZSkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IFtyZXF1ZXN0ZWRUZW1wbGF0ZV07XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RlZFRlbXBsYXRlKSAmJiByZXF1ZXN0ZWRUZW1wbGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRlbXBsYXRlcyA9IHJlcXVlc3RlZFRlbXBsYXRlO1xuICAgIH1cblxuICAgIGlmICh0ZW1wbGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB1c2luZ1RlbXBsYXRlcyA9IHRydWU7XG5cbiAgICAgICAgaGVhZGVyc1snc3RlbmNpbC1vcHRpb25zJ10gPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICByZW5kZXJfd2l0aDogdGVtcGxhdGVzLmpvaW4oJywnKSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbWFrZSBhamF4IHJlcXVlc3QgdXNpbmcganF1ZXJ5XG4gICAgJC5hamF4KHtcbiAgICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBjb250ZW50VHlwZTogb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSA/IGZhbHNlIDogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXG4gICAgICAgIHByb2Nlc3NEYXRhOiAhb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5mb3JtRGF0YSxcbiAgICAgICAgc3VjY2VzczogKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmV0O1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IG9wdGlvbnMucmVtb3RlID8gcmVzcG9uc2UuY29udGVudCA6IHJlc3BvbnNlO1xuXG4gICAgICAgICAgICBpZiAodXNpbmdUZW1wbGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGBjb21wb25lbnRzYCBwcmVmaXggZnJvbSB0aGUgcmVzcG9uc2UgaWYgaXQncyBhbiBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChjb250ZW50KSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoa2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuS2V5ID0ga2V5LnJlcGxhY2UoL15jb21wb25lbnRzXFwvLywgJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50W2NsZWFuS2V5XSA9IGNvbnRlbnRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSAoY29udGVudFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHVzaW5nIFwic2VjdGlvbnNcIiwgbW9ycGggdGhlIGNvbnRlbnQgaW50byB0aGUgYXJiaXRyYXJ5IGtleXMgPT4gY29udGVudCBvYmplY3QuXG4gICAgICAgICAgICAgICAgaWYgKHVzaW5nU2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVWYXJpYWJsZU5hbWVzID0gT2JqZWN0LmtleXMocmVxdWVzdGVkVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGVWYXJpYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh0ZW1wbGF0ZVZhcmlhYmxlIG9mIHRlbXBsYXRlVmFyaWFibGVOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFt0ZW1wbGF0ZVZhcmlhYmxlXSA9IGNvbnRlbnRbcmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVWYXJpYWJsZV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNvbnRlbnRbcmVxdWVzdGVkVGVtcGxhdGVbdGVtcGxhdGVWYXJpYWJsZV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXQuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldCA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXQpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKFhIUiwgdGV4dFN0YXR1cywgZXJyKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9LFxuICAgICAgICBkYXRhLFxuICAgICAgICBoZWFkZXJzLFxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgYXV0b0hpZ2hsaWdodCBmcm9tICcuL2F1dG8taGlnaGxpZ2h0JztcbmltcG9ydCBpdGVtSW5DYXJ0IGZyb20gJy4vY2FyZC1pdGVtLWluLWNhcnQnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcbmltcG9ydCB2YWxpZGl0eSBmcm9tICcuL2NoZWNrLXZhbGlkaXR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZUNhcnQoKSB7XG4gICAgLy8gU2V0IHVwIHRoZSBtdXRhYmxlIHBhZ2UgaGVpZ2h0IGJ5IGdyYWJiaW5nIGl0IGFuZCB0aGUgY2FydCBoZWlnaHQgdGhlbiBtb2RpZnlpbmcgYmFzZWQgb24gb25lIGFub3RoZXJcbiAgICAvLyBBbHNvIGdyYWIgdmlld3BvcnQgaGVpZ2h0IHNvIHdlIGNhbiBjcmVhdGUgYSBzY3JvbGxhYmxlIGlubmVyIGVsZW1lbnRcbiAgICBsZXQgZ2V0UGFnZUhlaWdodCA9ICQoJy5wYWdlJykuaGVpZ2h0KCk7XG4gICAgbGV0IGdldENhcnRIZWlnaHQgPSAkKCcuc2lkZS1jYXJ0JykuaGVpZ2h0KCk7XG5cbiAgICAvLyBPbmx5IG11dCB0aGUgaGVpZ2h0IG9mIGVsZW1lbnRzIGlmIG5vdCBvbiBhIG1vYmlsZSBkZXZpY2VcbiAgICBpZiAoIS9Nb2JpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAkKCcjc2lkZS1jYXJ0LWNvbnRhaW5lciAuc2lkZS1jYXJ0LWNvbnRhaW5lcicpLmNzcygnaGVpZ2h0JywgZ2V0UGFnZUhlaWdodCk7XG4gICAgfVxuXG4gICAgLy8gUXVpY2stQWRkIFNLVSBoYW5kbGVyXG4gICAgY29uc3QgJGZvcm0gPSAkKCcucXVpY2stYWRkJyk7XG5cbiAgICAvLyBTZXQgdXAgdGhlIHN0aWNreS1uZXNzIG9mIHRoZSBzaWRlLWNhcnRcbiAgICBjb25zdCBTdGlja3kgPSByZXF1aXJlKCdzdGlja3ktanMnKTtcbiAgICBjb25zdCBzdGlja3kgPSBuZXcgU3RpY2t5KCcjc2lkZS1jYXJ0LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBjYXJ0IHNpemUvZGltZW5zaW9ucyBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNhcnRTaXplKCkge1xuICAgICAgICAvLyBNdXQgdGhlIHBhZ2UgaGVpZ2h0IHRvIGJldHRlciBjb250YWluIHRoZSBzaWRlLWNhcnRcbiAgICAgICAgZ2V0UGFnZUhlaWdodCA9ICQoJy5wYWdlJykuaGVpZ2h0KCk7XG4gICAgICAgIGdldENhcnRIZWlnaHQgPSAkKCcjc2lkZS1jYXJ0LWNvbnRhaW5lcicpLmhlaWdodCgpO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIHRoZSBkYXRhLXN0aWNreS1jb250aWFuZXIgdGFnIHRvIG1ha2Ugc3VyZSB3ZSBzaG91bGQgbXV0IHRoZSBwYWdlXG4gICAgICAgIGNvbnN0IGdldFBhZ2VUeXBlID0gJCgnLnBhZ2UnKS5hdHRyKCdkYXRhLXN0aWNreS1jb250YWluZXInKTtcblxuICAgICAgICBpZiAoZ2V0UGFnZVR5cGUgJiYgKCQod2luZG93KS53aWR0aCgpID4gMTI2MCkpIHtcbiAgICAgICAgICAgIGlmIChnZXRQYWdlSGVpZ2h0IDwgNjg1KSB7XG4gICAgICAgICAgICAgICAgc3RpY2t5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGdldENhcnRIZWlnaHQgPiA2ODUgJiYgZ2V0UGFnZUhlaWdodCA8IDczNCkge1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnLCBnZXRDYXJ0SGVpZ2h0ICsgNDkpO1xuICAgICAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtY29udGFpbmVyJykuY3NzKCdtaW4taGVpZ2h0JywgZ2V0Q2FydEhlaWdodCArIDI2KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChnZXRDYXJ0SGVpZ2h0ID4gZ2V0UGFnZUhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NpZGUtY2FydC1jb250YWluZXIgLnNpZGUtY2FydC1jb250YWluZXInKS5jc3MoJ21pbi1oZWlnaHQnLCBnZXRDYXJ0SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2UtY29udGVudCcpLmNzcygnbWluLWhlaWdodCcsIGdldENhcnRIZWlnaHQgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdlLWNvbnRlbnQnKS5jc3MoJ21pbi1oZWlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5LnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgbGluZSBjdXRzIG91dCBhIGZpdmUgbGluZSBlbHNlLWlmLiBJdCdzIG5vdCBtZWFudCB0byBiZSBjYWxsZWQgYWZ0ZXIgYmVpbmcgY3JlYXRlZCwganVzdCBpbnZva2VkIHVwb24gYmlydGguXG4gICAgICAgIGNvbnN0IHNpZGVDYXJ0UG9wdWxhdGVkQ2hlY2sgPSAoISQoJy5zaWRlLWNhcnQtaXRlbScpLnRleHQoKSkgPyAkKCcuc2lkZS1jYXJ0LXBsYWNlaG9sZGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykgOiBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgICAgIGF1dG9IaWdobGlnaHQoKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNhcnQgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB1cGRhdGVDYXJ0KCkge1xuICAgICAgICBjb25zdCAkc2lkZUNhcnQgPSAkKCcuc2lkZS1jYXJ0LWNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgJHNpZGVDYXJ0RGV0YWlscyA9ICQoJy5zaWRlLWNhcnQtZGV0YWlscycpO1xuICAgICAgICBjb25zdCAkc2lkZUNhcnRBY3Rpb25zID0gJCgnLnNpZGUtY2FydC1hY3Rpb25zJyk7XG5cbiAgICAgICAgJCgnLnNpZGUtY2FydC1sb2FkaW5nJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICQoJy5zaWRlLWNhcnQtaXRlbScpLmNzcygnb3BhY2l0eScsICcwLjUnKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgYWN0aW9uczogJ2YvYjJiL3NpZGUtY2FydC1hY3Rpb25zJyxcbiAgICAgICAgICAgICAgICBjb3VudGVyOiAnZi9jYXJ0L2l0ZW0tY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAkc2lkZUNhcnQuaHRtbChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgICRzaWRlQ2FydERldGFpbHMuaHRtbChyZXNwb25zZS5kZXRhaWxzKTtcbiAgICAgICAgICAgICRzaWRlQ2FydEFjdGlvbnMuaHRtbChyZXNwb25zZS5hY3Rpb25zKTtcbiAgICAgICAgICAgICQoJy5jYXJ0LXF1YW50aXR5JykuaHRtbChyZXNwb25zZS5jb3VudGVyKTtcblxuICAgICAgICAgICAgLy8gVGhpcyBsaW5lIGN1dHMgb3V0IGEgZml2ZSBsaW5lIGVsc2UtaWYuIEl0J3Mgbm90IG1lYW50IHRvIGJlIGNhbGxlZCBhZnRlciBiZWluZyBjcmVhdGVkLCBqdXN0IGludm9rZWQgdXBvbiBiaXJ0aC5cbiAgICAgICAgICAgIGNvbnN0IHNpZGVDYXJ0UG9wdWxhdGVkQ2hlY2sgPSAoISQoJy5zaWRlLWNhcnQtaXRlbScpLnRleHQoKSkgPyAkKCcuc2lkZS1jYXJ0LXBsYWNlaG9sZGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykgOiBmYWxzZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCByZXNwb25zZS5jb3VudGVyKTtcblxuICAgICAgICAgICAgJCgnLnNpZGUtY2FydC1sb2FkaW5nJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICAgICQoJy5zaWRlLWNhcnQtaXRlbScpLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICBpdGVtSW5DYXJ0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVwZGF0ZUNhcnRTaXplKCk7XG4gICAgfVxuXG4gICAgLy8gUG9wdXAgZnVuY3Rpb24gZm9yIGlucHV0IG5vdGlmaWNhdGlvblxuICAgIGZ1bmN0aW9uIHBvcHVwKHRhcmdldCwgcGFyZW50LCBjaGlsZCwgc3RyLCBkZWxheSkge1xuICAgICAgICBjb25zdCAkcG9wdXAgPSAkKHRhcmdldCkucGFyZW50cyhgJHtwYXJlbnR9YCkuZmluZChgJHtjaGlsZH1gKTtcblxuICAgICAgICAkcG9wdXAuaHRtbChgJHtzdHJ9YCk7XG4gICAgICAgICRwb3B1cC5mYWRlSW4oMCkuZGVsYXkoZGVsYXkpLmZhZGVPdXQoMCk7XG4gICAgfVxuXG4gICAgLy8gRGVib3VuY2VyIGZ1Y250aW9uIHRvIHN0b3AgbXV0IGNhdGNoaW5nIHNwYW1cbiAgICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBib3VuY2VkKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uIHRpbWVkT3V0KCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTZXR1cCBhIGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXppbmcvc2Nyb2xsaW5nIHRvIGhlbHAga2VlcCBzaWRlLWNhcnQgYm91bmRhcmllcyBjb21wbGlhbnRcbiAgICBjb25zdCBjYXRjaFdpbmRvd1Jlc2l6ZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgdXBkYXRlQ2FydFNpemUoKTtcbiAgICB9LCAzNTApO1xuXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShjYXRjaFdpbmRvd1Jlc2l6ZSk7XG4gICAgJCh3aW5kb3cpLnNjcm9sbChjYXRjaFdpbmRvd1Jlc2l6ZSk7XG5cbiAgICAvLyBCaW5kIHRoZSBxdWljayBhZGQgU0tVIGJ1dHRvblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGb3JtKGV2ZW50LCBmb3JtKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGNvbnN0IHRhcmdldEZvcm0gPSBmb3JtO1xuICAgICAgICBjb25zdCBza3UgPSAkKHRhcmdldEZvcm0pLmZpbmQoJ1tkYXRhLXNrdV0nKTtcbiAgICAgICAgY29uc3QgcXR5ID0gJCh0YXJnZXRGb3JtKS5maW5kKCdbZGF0YS1xdHldJyk7XG4gICAgICAgIGNvbnN0IHVybCA9IGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3UudmFsKCl9JnF0eT0ke3F0eS52YWwoKX1gO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGVycm9yOiAnZi9iMmIvcXVpY2stYWRkLXJlc3BvbnNlJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnZi9iMmIvc2lkZS1jYXJ0LWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIGRldGFpbHM6ICdmL2IyYi9zaWRlLWNhcnQtZGV0YWlscycsXG4gICAgICAgICAgICAgICAgbmV3c2t1OiAnZi9iMmIvc2lkZS1jYXJ0LXF1aWNrLWFkZC1za3UnLFxuICAgICAgICAgICAgICAgIGNvdW50ZXI6ICdmL2NhcnQvaXRlbS1jb3VudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChza3UudmFsKCkgJiYgcXR5LnZhbCgpKSB7XG4gICAgICAgICAgICByZXF1ZXN0KHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JpcHRSZWdleCA9IC88c2NyaXB0XFxiW148XSooPzooPyE8XFwvc2NyaXB0Pik8W148XSopKjxcXC9zY3JpcHQ+L2dpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuUmVzcG9uc2UgPSByZXNwb25zZS5lcnJvci5yZXBsYWNlKHNjcmlwdFJlZ2V4LCAnJykudHJpbSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2xlYW5SZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtc2t1LWFkZCcsICcuYWRkLXNpZGUtY2FydC1za3UtaXRlbScsIGNsZWFuUmVzcG9uc2UsIDQwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcmVzcG9uc2UuY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRvIGFkZCBsYW5nIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1za3UtYWRkJywgJy5hZGQtc2lkZS1jYXJ0LXNrdS1pdGVtJywgYCR7cXR5LnZhbCgpfSAmdGltZXMgJHtza3UudmFsKCl9IEFkZGVkIHRvIENhcnRgLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBza3UudmFsKCcnKTtcbiAgICAgICAgICAgICAgICBxdHkudmFsKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3B1cChldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNpZGUtY2FydC1za3UtYWRkJywgJy5hZGQtc2lkZS1jYXJ0LXNrdS1pdGVtJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdlcnJvcicpLCAyMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNhcnRTaXplKCk7XG4gICAgfVxuXG4gICAgJGZvcm0ub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBwcm9jZXNzRm9ybShldmVudCwgZXZlbnQudGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBhIHByb2R1Y3QgcXVhbnRpdHlcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5zaWRlLWNhcnQtaXRlbS1xdHktaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCFpc1ZhbGlkLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgaWYgKHZhbGlkaXR5KSB7XG4gICAgICAgICAgICAgICAgaXNWYWxpZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBgUGxlYXNlIGVudGVyIGEgdmFsaWQgcXVhbnRpdHkgKG11bHRpcGxlcyBvZiAke2lzVmFsaWQuc3RlcH0pYCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaWQnKS5zdWJzdHJpbmcoNCk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KCQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCksIDEwKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFcnIgPSByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCcvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyck1heCA9IGN1cnJlbnRFcnIuc2VhcmNoKC9tYXhpbXVtL2kpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyck1pbiA9IGN1cnJlbnRFcnIuc2VhcmNoKC9taW5pbXVtL2kpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyclN0b2NrID0gY3VycmVudEVyci5zZWFyY2goL2Vub3VnaC9pKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJNYXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2lkZS1jYXJ0LWl0ZW0taW5mbycsICcuY2hhbmdlLXNpZGUtY2FydC1xdHknLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3F1YW50aXR5LW1heC1lcnJvcicpLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVyck1pbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9wdXAoZXZlbnQuY3VycmVudFRhcmdldCwgJy5zaWRlLWNhcnQtaXRlbS1pbmZvJywgJy5jaGFuZ2Utc2lkZS1jYXJ0LXF0eScsICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncXVhbnRpdHktbWluLWVycm9yJyksIDIwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyU3RvY2sgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2lkZS1jYXJ0LWl0ZW0taW5mbycsICcuY2hhbmdlLXNpZGUtY2FydC1xdHknLCAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3N0b2NrLWVycm9yJyksIDIwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVwKGV2ZW50LmN1cnJlbnRUYXJnZXQsICcuc2lkZS1jYXJ0LWl0ZW0taW5mbycsICcuY2hhbmdlLXNpZGUtY2FydC1xdHknLCBjdXJyZW50RXJyLCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXV0b0hpZ2hsaWdodCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVDYXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgY2FydCBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCwgcHJvZHVjdElkKSB7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7IC8vIENhdGNoIGZvciBpZiB5b3UgdHJ5IHRvIHJlbW92ZSB0aGUgaXRlbSBiZWZvcmUgdGhlIGNhcnQgaGFzIGJlZW4gdXBkYXRlZCB3aXRoIGl0IHNlcnZlci1zaWRlXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2FydCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtSW5DYXJ0KHByb2R1Y3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIGNhcnQgdHJpZ2dlclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FydC1yZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0LWl0ZW1pZCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3QtaWQnKTtcbiAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkLCBwcm9kdWN0SWQpO1xuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIGV2ZXJ5dGhpbmdcbiAgICB1cGRhdGVDYXJ0KCk7XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IHByb2R1Y3RzO1xuXG4gICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICBpZiAoJGNoZWNrZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihwcm9kdWN0cywgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlQ291bnRlciA9IHByb2R1Y3RzIHx8IFtdO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=