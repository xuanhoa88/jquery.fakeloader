'use strict';
(function($, undefined) {

    $.fn.fakeLoader = function(options) {

        //Defaults
        var settings = $.extend({
            timeToHide: 1200, // Default Time to hide fakeLoader
            pos: 'fixed', // Default Position
            top: '0px', // Default Top value
            left: '0px', // Default Left value
            width: '100%', // Default width 
            height: '100%', // Default Height
            zIndex: '999', // Default zIndex 
            bgColor: '#2ecc71', // Default background color
            spinner: 'spinner7', // Default Spinner
            imagePath: '' // Default Path custom image
        }, options);

        //Customized Spinners
        var spinner01 = '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>';
        var spinner02 = '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>';
        var spinner03 = '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>';
        var spinner04 = '<div class="fl spinner4"></div>';
        var spinner05 = '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>';
        var spinner06 = '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
        var spinner07 = '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>';

        //The target
        var el = $(this);

        //Apply styles
        el.css({
            'position': settings.pos,
            'width': settings.width,
            'height': settings.height,
            'top': settings.top,
            'left': settings.left
        });

        //Each 
        el.each(function() {
            //Add customized loader image
            if (settings.imagePath) {
                el.html('<div class="fl"><img src="' + settings.imagePath + '"></div>');
            } else {
                switch (settings.spinner) {
                    case 'spinner2':
                        el.html(spinner02);
                        break;
                    case 'spinner3':
                        el.html(spinner03);
                        break;
                    case 'spinner4':
                        el.html(spinner04);
                        break;
                    case 'spinner5':
                        el.html(spinner05);
                        break;
                    case 'spinner6':
                        el.html(spinner06);
                        break;
                    case 'spinner7':
                        el.html(spinner07);
                        break;
                    default:
                        el.html(spinner01);
                }
            }

            centerLoader();
        });

        //Time to hide fakeLoader
        setTimeout(function() {
            $(el).fadeOut();
        }, settings.timeToHide);

        //Return Styles 
        return this.css({
            'backgroundColor': settings.bgColor,
            'zIndex': settings.zIndex
        });


    }; // End Fake Loader

    //Center Spinner
    function centerLoader() {
        $('.fl').css({
            position: 'relative',
            height: '100%',
            width: '100%'
        });
        $('.fl > img').css({
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            margin: 'auto'
        });
    }

    $(window).on('load', centerLoader);
    $(window).resize(centerLoader);

}(jQuery));
