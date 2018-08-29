/*globals window b$, bd, gadgets*/

(function (window, b$, pubsub, bd, $) {
    'use strict';
    var FADE_OUT = 0,
        autoHeight = false,
        percentageHeight = false,
        percentageWidth = false;

    var Container = b$.bdom.getNamespace('http://backbase.com/2013/portalView').getClass('container');

    Container.extend(function (bdomDocument, node) {
        Container.apply(this, arguments);
        this.isPossibleDragTarget = true;
    }, {
        localName: 'LightboxContainer',
        lpAlignerClass: function() {
          return (this.getPreference('customClassName') + ' lp-aligner').trim();
        },
        namespaceURI: 'launchpad',
        DOMReady: function () {
            this.init();
        },

        setLightboxPos: function () {
            var $lightbox = $(this.htmlNode);
            var $lightboxArea = $lightbox.find('> .lp-lightbox-inner .lp-lightbox-area');
            var $window = $(window);
            var windowWidth = $window.width();
            var windowHeight = $window.height();

            var lightboxWidth = parseInt(this.getPreference('width'), 10);
            var lightboxHeight = parseInt(this.getPreference('height'), 10);
            var lightboxPaddingX = 30;

            if (this.getPreference('height').match(/(%)$/)) {
                percentageHeight = true;
            }
            if (this.getPreference('width').match(/(%)$/)) {
                percentageWidth = true;
            }
            if (lightboxHeight === 0) {
                autoHeight = true;
            }


            var width;
            if (windowWidth - lightboxPaddingX < lightboxWidth) {
                width = windowWidth - lightboxPaddingX;
            } else {
                width = lightboxWidth > 0 ? lightboxWidth : 'auto';
            }

            if (autoHeight) {
                $lightboxArea.css({
                    maxHeight: windowHeight / 2,
                    overflow: 'auto'
                });
            } else {
                $lightboxArea.css({
                    height: percentageHeight ? (lightboxHeight / 100) * windowHeight : lightboxHeight,
                    overflow: 'auto'
                });
            }

            $lightbox.css({
                width: percentageWidth ? (lightboxWidth / 100) * windowWidth : width
            });
        },

        //lightbox closing
        hideLightbox: function hideLightBox() {
            var self = this;
            var $body = $('body');
            var $lightbox = $(this.htmlNode).parent();

            if ($('.lp-lightbox-on').not($lightbox).length === 0) {
                this.hideOverlay();
            }

            $lightbox.fadeOut(FADE_OUT, function () {
                $lightbox.css({
                    width: '',
                    minHeight: '',
                    left: '',
                    top: '',
                    display: ''
                });
                $lightbox.removeClass('lp-lightbox-on');
                $body.css('overflow', '');

                if (bd.designMode) {
                    // $lightbox.show();
                    self.$wrapper.css('display', '');
                    self.$lightbox.css('width', '');
                }

                gadgets.pubsub.publish('LightboxClosed', this.htmlNode);
            });
        },

        //lightbox launching
        showLightbox: function () {
            $(this.htmlNode).parent().attr('class') !== this.lpAlignerClass() && this.wrap();

            var $lightbox = $(this.htmlNode).parent();
            this.parent = $lightbox.parent();

            $lightbox.addClass('lp-lightbox-on')
                .show()
                .find('.lp-springboard-widget-body')
                .show();

            this.showOverlay();
            this.setLightboxPos();
            
            gadgets.pubsub.publish('LightboxOpened', this.htmlNode);
        },


        /**
         * Checks if container editable or not
         * @return {Boolean}
         */
        isEditable: function () {
            var page = this;
            while (page.model.tag.toLowerCase() !== 'page' && page.model.tag.toLowerCase() !== 'portal' && page.model.tag.toLowerCase() !== 'application') {
                page = page.parentNode;
            }
            var onMasterPage = page.pageType !== 'inherited';
            var editable = (!onMasterPage && (!this.model.manageable || this.model.manageable === 'true')) || onMasterPage;

            return editable;
        },

        /**
         * Wraps the $lightbox with helper div with class this.lpAlignerClass
         *
         */
        wrap: function () {
            this.$wrapper = $('<div class="' + this.lpAlignerClass() + '" />');
            this.$lightbox.wrap(this.$wrapper);
        },

        init: function () {
            if (!this.initialized) {
                this.initialized = true;

                var self = this;
                var title = this.getPreference('modalTitle');
                var $lightbox = $(this.htmlNode);
                var showClose = this.getPreference('show-close');
                var openTriggers = this.getPreference('open-trigger').split(' ');
                var hideHeader = this.getPreference('hide-header');

                self.$lightbox = $lightbox;
                self.wrap();

                if (hideHeader) {
                    $lightbox.find('.modal-header').first().addClass('d-none');
                }

                openTriggers.push(this.model.name + '_open');

                $(window).on('resize', function () {
                    if ($lightbox.hasClass('lp-lightbox-on')) {
                        self.setLightboxPos();
                    }
                });


                var i, len = openTriggers.length;
                for (i = 0; i < len; i++) {
                    var openTrigger = openTriggers[i];
                    if (openTrigger.toLowerCase() === 'onload') {
                        //special triggers
                        $(window).ready($.proxy(this, 'showLightbox'));
                    } else {
                        //user triggers
                        gadgets.pubsub.subscribe(openTriggers[i], $.proxy(this, 'showLightbox'));
                    }
                }


                var closeTriggers = this.getPreference('close-trigger').split(' ');
                closeTriggers.push(this.model.name + '_close');
                len = openTriggers.length;


                for (i = 0; i < len; i++) {
                    gadgets.pubsub.subscribe(closeTriggers[i], $.proxy(this, 'hideLightbox'));
                }

                $('.lp-lightbox-close', $lightbox).first().on('click', $.proxy(this, 'hideLightbox'));

                //design mode tools
                if (bd.designMode && this.isEditable()) {

                    var previewHtml = $('<div class="lp-lightbox-preview lp-nonfunc-item"/>').text(title);
                    $lightbox.prepend(previewHtml);

                    $lightbox.on('click', '.lp-lightbox-preview', $.proxy(this, 'showLightbox'));
                }

                if (!bd.designMode && showClose === false || showClose === 'false') {
                    $lightbox.find('.lp-lightbox-close').hide();
                }

                // set the lightbox chrome title
                $lightbox.find('.lp-widget-title').first().text(title);

            }

        },


        /**
         * TODO: split and simplify init function
         * Add lightbox handlers
         */
        addHandlers: function () {

        },

        /**
         * Show Lightbox overlay
         * @private
         */
        showOverlay: function () {
            var self = this;
            var lightboxReadyToClose = false;

            function setClickInDocumentBody(event){
                if($(event.target).closest('.lp-lightbox-container').length === 0) {
                    lightboxReadyToClose = true;
                }
            }
            function checkHideLighbox(event) {
                if($(event.target).closest('.lp-lightbox-container').length > 0) {
                    lightboxReadyToClose = false;
                }

                if(lightboxReadyToClose) {
                    if (self.getPreference('clickClose') !== false) {
                      hideLightbox(event);
                    }
                    lightboxReadyToClose = false;
                }
            }

            if (!this.overlay) {
                var overlay = $('#lp-lighbox-overlay');
                var overlayClasses = this.getPreference('customClassName') + ' lp-overlay';
                this.overlay = overlay.length ? overlay : 
                  $('<div id="lp-lighbox-overlay" class="' + overlayClasses.trim() + '" style="display: none;" />');
                  
                $('.lp-aligner').after(this.overlay);
                this.overlay.on('click', $.proxy(this, 'hideLightbox'));
            }
            function hideLightbox(event) {
                var target = $(event.target);
                if(target.hasClass('lp-lightbox-on')) {
                    self.hideLightbox();
                    $(document.body).off('mouseup', hideLightbox);
                }
            }

            $(document.body).off('mouseup', checkHideLighbox);
            $(document.body).off('mousedown', setClickInDocumentBody);
            $(document.body).on('mouseup', checkHideLighbox);
            $(document.body).on('mousedown', setClickInDocumentBody);
            $(document.body).off('keyup', checkHideLighbox);
            $(document.body).on('keyup', function(event) {
              // escape key maps to keycode `27`
              if (self.getPreference('clickClose') !== false && event.keyCode === 27) {
                self.hideLightbox();
              }
            });
            this.overlay.fadeIn('fast');

        },

        /**
         *
         * @private
         */
        hideOverlay: function () {
            if (this.overlay) {
                this.overlay.fadeOut('fast');
            }
        },

        /**
         * Destroy callback
         */
        destroy: function () {
            this.hideOverlay();
            return Container.prototype.destroy.call(this);
        }


    }, {
        template: function (json) {
            var data = {item: json.model.originalItem};
            var sTemplate = window['templates_' + this.localName][this.localName](data);
            return sTemplate;
        },
        handlers: {
            'preferencesSaved': function (ev) {
                if (ev.target.nodeName === 'LightboxContainer') {
                    var self = ev.currentTarget;

                    var newTitle = self.getPreference('modalTitle');
                    self.$lightbox.find('.lp-widget-title').first().text(newTitle);

                    if (bd.designMode) {
                        self.$lightbox.children('.lp-lightbox-preview').text(newTitle);
                    }
                    $('.lp-lightbox-close', self.$lightbox).first().trigger('click');
                    self.refreshHTML(function () {
                        $('.lp-lightbox-preview').click();
                    });
                }
            }
        }
    });


})(window, window.b$, window.gadgets && window.gadgets.pubsub, window.bd, window.jQuery);
