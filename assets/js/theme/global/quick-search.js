import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import StencilDropDown from './stencil-dropdown';

export default function () {
    const $quickSearchResults = $('.quickSearchResults');
    const $quickSearchClear = $('.quickSearchInput .modal-close');
    const $quickSearchDiv = $('#quickSearch');
    const $searchQuery = $('#search_query');
    const stencilDropDownExtendables = {
        hide: () => {
            $searchQuery.trigger('blur');
            $quickSearchResults.html('');
            $quickSearchClear.hide();
            $quickSearchResults.removeClass('rendered');
        },
        show: (event) => {
            $searchQuery.trigger('focus');
            event.stopPropagation();
        },
    };
    const stencilDropDown = new StencilDropDown(stencilDropDownExtendables);
    stencilDropDown.bind($('[data-search="quickSearch"]'), $quickSearchDiv);

    stencilDropDownExtendables.onBodyClick = (e, $container) => {
        // If the target element has this data tag or one of it's parents, do not close the search results
        // We have to specify `.modal-background` because of limitations around Foundation Reveal not allowing
        // any modification to the background element.
        if ($(e.target).closest('[data-prevent-quick-search-close], .modal-background').length === 0) {
            stencilDropDown.hide($container);
        }
    };

    // stagger searching for 200ms after last input
    const doSearch = _.debounce((searchQuery) => {
        utils.api.search.search(searchQuery, { template: 'search/quick-results' }, (err, response) => {
            if (err) {
                return false;
            }

            $quickSearchResults.html(response);
            $quickSearchResults.addClass('rendered');
            $quickSearchClear.show();

            $('.modal-close').on('click', (event) => {
                $quickSearchResults.empty().hide();
                $quickSearchResults.removeClass('rendered');
                $searchQuery.val('');
                event.preventDefault();
            });
        });
    }, 200);

    utils.hooks.on('search-quick', (event, currentTarget) => {
        // Don't use quick search for mobiles
        if (/Mobi/i.test(navigator.userAgent)) {
            return;
        }

        const searchQuery = $(currentTarget).val();

        // server will only perform search with at least 3 characters
        if (searchQuery.length < 3) {
            return;
        }

        doSearch(searchQuery);
    });

    // Catch the submission of the quick-search
    $quickSearchDiv.on('submit', event => {
        const searchQuery = $(event.currentTarget).find('input').val();

        if (searchQuery.length === 0) {
            return event.preventDefault();
        }

        return true;
    });

    $(document).on('click', '#quickSearch .view-all-button', function () {
        $('#quickSearch').find('form').trigger('submit');
    });
}
