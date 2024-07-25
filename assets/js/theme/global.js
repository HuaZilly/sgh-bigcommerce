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
import hmacSHA384 from 'crypto-js/hmac-sha384';
import sha384 from 'crypto-js/sha384';
import Base64 from 'crypto-js/enc-base64';
import swal from './global/sweet-alert';
import {error} from "lighthouse-logger";

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

        let topBanner = $('[data-content-region="above_header_banner--global"]'),
            topBannerHeight = 0;
        if (topBanner.length > 0) {
            topBannerHeight = topBanner.height() + 26;
        }
        document.documentElement.style.setProperty('--app-global-banner-height', topBannerHeight + 'px');

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

        let jsContext = this.context,
            maxRewardKey = jsContext.secretKey,
            maxRewardBaseUrl = jsContext.maxRewardBaseUrl,
            maxRewardBearTokenUrl = maxRewardBaseUrl + jsContext.bearTokenUrl,
            maxRewardBearTokenUser = jsContext.bearTokenUser,
            maxRewardBearTokenPassword = jsContext.bearTokenPassword,
            maxRewardGenerateSsoKeyAPI = maxRewardBaseUrl + jsContext.generateSsoKeyAPI,
            maxRewardLink = document.querySelector('.max-reward-link a');

        if (maxRewardLink) {
            maxRewardLink.addEventListener('click', generateSsoKey);
        }

        Number.prototype.padLeft = function(base, chr){
            let  len = (String(base || 10).length - String(this).length) + 1;
            return len > 0 ? new Array(len).join(chr || '0')+this : this;
        }

        function generateDatabaseDateTime(date) {
            return date.toISOString().replace("T"," ").substring(0, 19);
        }

        function calculateDate() {
            let theDate = new Date;

            return [theDate.getDate().padLeft(),
                    (theDate.getMonth() + 1).padLeft(),
                    theDate.getFullYear()].join('-') + '-' +
                    [theDate.getHours().padLeft(),
                    theDate.getMinutes().padLeft(),
                    theDate.getSeconds().padLeft()].join('-');

        }

        function generateSsoKey(e) {
            e.preventDefault();
            let bearTokenData = {
                "username": maxRewardBearTokenUser,
                "password": maxRewardBearTokenPassword
            };

            let options = {
                method: 'POST',
                headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify(bearTokenData)
            };

            fetch(maxRewardBearTokenUrl, options)
                .then(response => response.json())
                .then(response => {
                    // Get Bear Token
                    if (response.token) {
                        return response.token;
                    }
                    else {
                        return ''
                    }

                })
                .then(token => {
                    let customerEmail = jsContext.customer.email;
                    if (!token) {
                        console.error('Token generate failed please check your token again');
                        return;
                    }
                    if (!customerEmail) {
                        console.error('No email found');
                        return;
                    }
                    let timeStamp = calculateDate(),
                        hasDigest = sha384(customerEmail + timeStamp),
                        hmacDigest = Base64.stringify(hmacSHA384(maxRewardKey, hasDigest));

                    return {
                        token,
                        hmacDigest,
                        customerEmail,
                        timeStamp
                    }

                }).then(response => {
                    if (response.hmacDigest) {
                        console.log('has digest sha384');
                        let bearToken = "Bearer " + response.token,
                            authParams = {
                                "authParams": {
                                    "digest": response.hmacDigest,
                                    "username": response.customerEmail,
                                    "timestamp": response.timeStamp
                                }
                        };

                        let options = {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': bearToken
                            },
                            body: JSON.stringify(authParams)
                        };

                        fetch(maxRewardGenerateSsoKeyAPI, options)
                            .then(response => {
                                console.log(2)
                                console.log(response)
                            })
                    } else {
                        console.error('No digest hmac key');
                    }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
