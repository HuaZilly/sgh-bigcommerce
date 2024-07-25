(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3VybC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbC5pbnNwZWN0IChpZ25vcmVkKSJdLCJuYW1lcyI6WyJDYXRhbG9nUGFnZSIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwidXJsIiwiVXJsIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsIiQiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfdGhpcyIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiX2V4dGVuZCIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvbnBvcHN0YXRlIiwidHJpZ2dlciIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaWQiLCJhdHRyIiwiX3dpdGhvdXQiLCJoYXNNb3JlUmVzdWx0cyIsIl91bmlvbiIsInRvZ2dsZUZhY2V0SXRlbXMiLCJfaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiX3RoaXMzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiX3RoaXM0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJfdGhpczUiLCJsZW5ndGgiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCJfdGhpczYiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsIl90aGlzNyIsInVuYmluZEV2ZW50cyIsIm9uIiwiZG9jdW1lbnQiLCJob29rcyIsIm9mZiIsIiRsaW5rIiwic3RvcFByb3BhZ2F0aW9uIiwiZ29Ub1VybCIsIiR0b2dnbGUiLCJ0b2dnbGVDbGFzcyIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJfY2FtZWxDYXNlIiwiX2NhcGl0YWxpemUiLCJhZGRDbGFzcyIsImNsYXNzaWZ5Rm9ybSIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwidGl0bGUiLCJzZWFyY2hHb1RvVXJsIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwiaGFzT3duUHJvcGVydHkiLCJxdWVyeURhdGEiLCJvdXQiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybENvbnRleHQiLCJjb21wYXJlIiwiaHRtbCIsInByb2R1Y3RzIiwiJGNoZWNrZWQiLCIkY29tcGFyZUxpbmsiLCJfbWFwIiwiY29tcGFyZUNvdW50ZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwic2hvd0FsZXJ0TW9kYWwiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0M7QUFDcEI7QUFBQSxJQUVEQSxXQUFXLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsWUFBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixXQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLFdBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQzVCRSxjQUFjLEdBQWQsU0FBQUEsZUFBZUMsS0FBSyxFQUFFO0lBQ2xCLElBQU1DLEdBQUcsR0FBR0MsMENBQUcsQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNqRCxJQUFNQyxXQUFXLEdBQUdDLENBQUMsQ0FBQ1IsS0FBSyxDQUFDUyxhQUFhLENBQUMsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUVqRVYsR0FBRyxDQUFDVyxLQUFLLENBQUNMLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU9OLEdBQUcsQ0FBQ1csS0FBSyxDQUFDQyxJQUFJO0lBRXJCYixLQUFLLENBQUNjLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCVixNQUFNLENBQUNDLFFBQVEsR0FBR0gsMENBQUcsQ0FBQ2EsTUFBTSxDQUFDO01BQUVDLFFBQVEsRUFBRWYs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QUMxQjtFQUNKLENBQUMsQ0FBQztFQUVGTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMrSCxFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTTJILG9CQUFvQixHQUFHMVAsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOEosSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUk0RixvQkFBb0IsQ0FBQzVJLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbEMySSw2REFBYyxDQUFDLGtEQUFrRCxDQUFDO01BQ2xFLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOLEM7Ozs7Ozs7Ozs7OztBQ3hFQSxlIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdmL2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG4gICAgICogICAgIH1cbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IHRlbXBsYXRlc0RpZExvYWQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGFjY29yZGlvblRvZ2dsZVNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUnLFxuICAgICAgICAgICAgYmxvY2tlclNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXInLFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgICAgICAgICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgICAgICAgICAgbW9kYWw6IG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF0sXG4gICAgICAgICAgICBtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIERPTSBldmVudHNcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gUmVtb3ZlXG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoJ2hhc01vcmVSZXN1bHRzJyk7XG5cbiAgICAgICAgaWYgKGhhc01vcmVSZXN1bHRzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcbiAgICAgICAgaWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YSgnZmFjZXQnKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuICAgICAgICAgICAgYXBpLmdldFBhZ2UoZmFjZXRVcmwsIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdF9hbGw6IGZhY2V0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuICAgICAgICBjb25zdCAkaXRlbXMgPSAkKCcubmF2TGlzdC1pdGVtJyk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICRpdGVtcy5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9ICQoZWxlbWVudCkudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKHF1ZXJ5KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5vcGVuKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUuY2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIGluaXRQcmljZVZhbGlkYXRvcigpIHtcbiAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbm9kKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH07XG5cbiAgICAgICAgVmFsaWRhdG9ycy5zZXRNaW5NYXhQcmljZVZhbGlkYXRpb24odmFsaWRhdG9yLCBzZWxlY3RvcnMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9uKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCd0b2dnbGUuY29sbGFwc2libGUnLCB0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25BY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkJywgdGhpcy5vblJhbmdlU3VibWl0KTtcbiAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgb25DbGVhckZhY2V0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgIH1cblxuICAgIG9uVG9nZ2xlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHZpc2libGUgaXRlbXNcbiAgICAgICAgdGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcbiAgICB9XG5cbiAgICBvbkZhY2V0Q2xpY2soZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkbGluay50b2dnbGVDbGFzcygnaXMtc2VsZWN0ZWQnKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IGA/JHtxdWVyeVBhcmFtc31gIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHNlYXJjaEdvVG9Vcmw6ICgpID0+IHtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IHByb2R1Y3RzO1xuXG4gICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICBpZiAoJGNoZWNrZWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHByb2R1Y3RzID0gXy5tYXAoJGNoZWNrZWQsIGVsZW1lbnQgPT4gZWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihwcm9kdWN0cywgJGNvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wYXJlQ291bnRlciA9IHByb2R1Y3RzIHx8IFtdO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=