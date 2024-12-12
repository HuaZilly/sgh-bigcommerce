/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/form-utils';
import selectedOption from './f/selected-option';
import image from "@bigcommerce/stencil-utils/src/tools/image";

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let options = {
            dots: false,
            arrows: false,
            vertical: false,
            infinite: false,
            fade: false,
            asNavFor: '.productView-thumbnails',
            adaptiveHeight: true,
            swipe: true
        };

        let optionsNav = {
            infinite: false,
            mobileFirst: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            useTransform: true,
            swipe: true,
            draggable: true,
            focusOnSelect: true,
            asNavFor: '.productView-image',
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 4,
                        arrows: true,
                        vertical: true,
                        verticalSwiping: true,
                        adaptiveHeight: true
                    }
                }
            ]
            };

        if ($('.productView-image').length > 0) {
            $('.productView-image').slick(options);

        }
        if ($('.productView-thumbnails.data-slick-enabled').length  > 0){
            $('.productView-thumbnails.data-slick-enabled').slick(optionsNav);
        }

        function dynamicWidth() {
            let productImageStage = $('.product-image-stage'),
                imageStageWidth = 0,
                productImageNav = $('.product-image-nav'),
                imageNavWidth = 0;

            if (productImageStage.length > 0) {
                imageStageWidth = productImageStage.width();
                document.documentElement.style.setProperty('--description-width', imageStageWidth + 'px');
            }
            if (productImageNav.length > 0) {
                imageNavWidth = productImageNav.width();
                document.documentElement.style.setProperty('--description-margin-left', imageNavWidth + 'px');
            }
        }

        window.addEventListener("resize", dynamicWidth);
        window.addEventListener("load", dynamicWidth);

        let productDescription = $('.productView-description'),
            tabTitle = productDescription.find('.productView-title'),
            tabContent = productDescription.find('.content');

        if (tabTitle.length > 0 && tabContent.length > 0) {
            productDescription.each(function (index, element) {
                if ($(element).hasClass('is-product-description')) {
                    $(element).find('.content').show();
                    $(element).find('.productView-title').addClass('active');
                }
            })

            tabTitle.on('click', function () {
                $(this).toggleClass('active');
                $(this).closest('.productView-description').find('.content').toggle();
            })
        }

        let productInforContainer = $('.info-container');
        if (productInforContainer.length > 0) {
            if ($.trim(productInforContainer.text()) === '')  {
                productInforContainer.hide();
            }
        }

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        const $reviewForm = classifyForm('.writeReview-form');
        const review = new Review($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        if (this.context.enableSelectedOptionLabel) {
            selectedOption();
        }

        const Sticky = require('sticky-js');
        const sticky = new Sticky('.sticky-product'); // eslint-disable-line no-unused-vars

        this.productReviewHandler();
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }
}
