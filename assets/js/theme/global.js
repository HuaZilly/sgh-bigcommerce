import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import quickAddSkus from './f/quick-add-sku';
import accountMenu from './f/account-menu';
import autoHighlight from './f/auto-highlight';
import cardAddToCart from './f/card-add-to-cart';
import hoverNavigation from './f/hover-navigation';
import validity from './f/check-validity';
import getCustomerBalancePoints from "./get-customer-balance-points";
import getSSOKey from "./get-sso-key"
import swal from './global/sweet-alert';

export default class Global extends PageManager {
    onReady() {
        cartPreview(this.context.secureBaseUrl, this.context.cartId, this.context.disableMinicart, this.context.enableSideCart);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        quickAddSkus();
        autoHighlight();
        cardAddToCart();
        svgInjector();
        accountMenu();

        if (!/Mobi/i.test(navigator.userAgent) && this.context.enableHoverNavigation) {
            hoverNavigation();
        } else {
            menu();
        }

        if (window.ApplePaySession) {
            $('.apple-pay-checkout-button').show();
        }

        if (window.location.pathname === '/') {
            $('body').addClass('is-home')
        }

        if ($('.slider-enabled').length > 0) {
            let imageGroupSlider = $('.slider-enabled').find('.image-slider-container');
            if (imageGroupSlider.length === 1) {
                imageGroupSlider.slick({
                    dots: false,
                    infinite: false,
                    slidesToScroll: 5,
                    slidesToShow: 5,
                    prevArrow: '<span class="slick-prev"></span>',
                    nextArrow: '<span class="slick-next"></span>',
                    responsive: [
                        {
                            breakpoint: 1260,
                            settings: {
                                slidesToScroll: 4,
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToScroll: 3,
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToScroll: 1,
                                slidesToShow: 1
                            }
                        }
                    ]
                });


            }
        }

        let heroBannerCarousel = $('.hero-banner-carousel'),
            heroContainer = heroBannerCarousel.find('.hero-banner');
        console.log(heroBannerCarousel);
        console.log(heroContainer);
        if(heroContainer.length > 0) {
            heroContainer.slick()
        }

        let productContainer = $('.product-container').find('.productCards');
        if (productContainer.length > 0) {
            productContainer.slick({
                dots: false,
                infinite: false,
                slidesToScroll: 5,
                slidesToShow: 5,
                prevArrow: '<span class="slick-prev"></span>',
                nextArrow: '<span class="slick-next"></span>',
                responsive: [
                {
                    breakpoint: 1260,
                    settings: {
                        slidesToScroll: 4,
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToScroll: 3,
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                    }
                }
            ]
            });


            productContainer.each(function (index, element) {
                let productName = $(element).find('.productCard .card-title');

                let productNameHeight = $(productName).map(function () {
                    return $(this).height();
                }).get();

                productName.css('height',  Math.max.apply(null, productNameHeight))
            })

        }

        function validateQuantity(quantityInput) {
            const quantity = parseInt(quantityInput.value);
            const moq = parseInt(quantityInput.step);

            if (isNaN(quantity) || quantity < moq || quantity % moq !== 0) {
                return swal({
                    text: `Please enter a valid quantity (multiples of ${moq})`,
                    type: 'error',
                });
            }
        }

        if (!validity) {
            $('body').on('input', '.form-input--incrementTotal, .form-input-qty', (e) => {
                validateQuantity(e.target);
            });
        }

        /* BundleB2B */
        const $body = $('body');
        const B3StorefrontURL = 'https://cdn.bundleb2b.net/b3-auto-loader.js';
        // const B3StorefrontURL = 'http://127.0.0.1:8080/bundleb2b.latest.js';
        $body.append(`<script src="${B3StorefrontURL}"></script>`);
        window.b3themeConfig = window.b3themeConfig || {};
        window.b3themeConfig.useContainers = {
            'dashboard.endMasquerade.container': '.header .header__inner',
            'cartActions.container': '.cart__container',
        };
        window.b3themeConfig.useJavaScript = {
            login: {
                callback(instance) {
                    const {
                        isB2BUser,
                        isInPages,
                        isMobile,
                        utils: {
                            B3Storage: {
                                B3RoleId: {
                                    value: b3RoleId,
                                },
                            },
                            constants: {
                                B3Role: {
                                    JUNIOR,
                                },
                            },
                        },
                    } = instance;

                    const renderB3AccountOptions = () => {
                        instance.renderB3Navs({
                            containerSelector: '#accountOptions',
                            navItemClassName: 'dropdown-menu-item dropdown_menu_item__b3',
                            navActionClassName: 'dropdown_menu_action__b3',
                            insertType: 'beforeend',
                        });

                        const renderB3AccountOptionInvoices = () => { 
                            const invoicesHtml = `
                                <li class="dropdown-menu-item dropdown_menu_item__b3">
                                    <a href="/invoices">Invoices</a>
                                </li>
                            `;

                            $('#accountOptions').find('.dropdown-menu-item').first().after(invoicesHtml);
                        };

                        if (instance.canShowB2BNav && instance.haveIPPermission) {
                            renderB3AccountOptionInvoices();
                        }

                        $('#accountOptions').append($('.dropdown_menu_item__logout'));
                    };

                    const fixLayout = () => { 
                        $('.page').css('width', '100%');
                    };

                    const hideWishlists = () => { 
                        const $addtoList__controls = $('.add-to-list__controls');
                        if ($addtoList__controls && $addtoList__controls.length) $addtoList__controls.hide()
                    };

                    const showBCOrdersContent = () => { 
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .account-container .account {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    const hideShoppingFeatures = () => { 
                        if ($('.header .sku-add') && $('.header .sku-add').length) $('.header .sku-add').hide()
                        if ($('.body .side-cart') && $('.body .side-cart').length) $('.body .side-cart').hide()
                        if ($('.body .button--cardAdd') && $('.body .button--cardAdd').length) $('.body .button--cardAdd').hide()
                        if ($('.category-recent-items .button--cardAdd') && $('.category-recent-items .button--cardAdd').length) $('.category-recent-items .button--cardAdd').hide()
                        if ($('.body .cart-actions a.button.button--primary') && $('.body .cart-actions a.button.button--primary').length) $('.body .cart-actions a.button.button--primary').hide()
                    };

                    if (isB2BUser) {
                        if (!isMobile) renderB3AccountOptions();
                        hideWishlists();
                    } else {
                        showBCOrdersContent();
                    }

                    if (isInPages) {
                        fixLayout();
                    }
                    
                    if (b3RoleId === JUNIOR) {
                        hideShoppingFeatures();
                    }
                },
            },
            orders: {
                callback(instance) {
                    const {
                        isB2BUser,
                    } = instance;

                    const fixClasslist = () => { 
                        $('.order-lists-wrap').addClass('account');
                    };

                    const showB3OrdersContent = () => { 
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .account-container .order-lists-wrap {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    if (isB2BUser) {
                        fixClasslist();
                        showB3OrdersContent();
                    }
                },
            },
            b2bpdp: {
                beforeMount(instance) {
                    instance.addShoppingListBtn = (quickView) => {
                        const el = quickView ? document.querySelector('#modal').querySelector('.productView-details .productView-options') : document.querySelector('.productView-details .productView-options')
                        const shoppingListContainer = document.createElement('div')

                        shoppingListContainer.classList.add('form-action')
                        shoppingListContainer.innerHTML = instance.shoppingListBtn(quickView || null)
                        el.append(shoppingListContainer)

                        if (quickView) foundation($('#modal'))
                    }
                },
            },
        };
        /* BundleB2B */

        let logoList = $('.header [data-hover-src]');
        if (logoList.length > 0) {
            let parentImg = logoList.parents('a');
            console.log(parentImg)
            parentImg.each(function (index, element) {
                let image = $(element).find('[data-hover-src]'),
                    text = $(element).find('[data-hover-src] + span');
                image.attr('data-current-src', image.attr('src'));
                $(element).on('mouseover', function () {
                    image.attr('src', image.attr('data-hover-src'));
                    text.show();
                });
                $(element).on('mouseleave', function () {
                    image.attr('src', image.attr('data-current-src'));
                    text.hide();
                });
            })
        }


        let jsContext = this.context,
            maxRewardBaseUrl = jsContext.maxRewardBaseUrl,
            maxRewardBearTokenUrl = maxRewardBaseUrl + jsContext.bearTokenUrl,
            maxRewardBearTokenUser = jsContext.bearTokenUser,
            maxRewardBearTokenPassword = jsContext.bearTokenPassword;


        let bearTokenData = {
            "username": maxRewardBearTokenUser,
            "password": maxRewardBearTokenPassword
        };

        let bearOptions = {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(bearTokenData)
        };

        if (jsContext.customer) {
            // Get SSO key
            getSSOKey(jsContext, maxRewardBearTokenUrl, bearOptions);

            // B2B feature
            getCustomerBalancePoints(jsContext, maxRewardBearTokenUrl, bearOptions);
        }

        let topBanner = $('.balance-points-banner'),
            topBannerHeight = 0;
        if (topBanner.length > 0) {
            topBannerHeight = topBanner.height() + 26;
        }

        document.documentElement.style.setProperty('--app-global-banner-height', topBannerHeight + 'px');
    }
}
