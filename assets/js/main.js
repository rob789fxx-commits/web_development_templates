$(document).ready(function () {
    // Dropdown
    // Dropdown menu
    $('.submenu').hide();
    $('.menu-item').each(function(){
        $('.menu-item').hover(function(){
            var isHovered = $(this).is(":hover");
            if (isHovered) {
                $(this).children('.submenu').stop().slideDown(500);
            } else {
                $(this).children('.submenu').stop().slideUp(500);
            }
        })
    })
    // Transform logo on mouseover and mouseout
    $('.logo-item').mouseover(function(){
        $('.logo-item').css('transform', 'scale(1.2,1.2)');
    })
    $('.logo-item').mouseout(function(){
        $('.logo-item').css('transform', 'scale(1,1)');
    })
    // Transform logo img on scroll and hover
    var lastScrollTop = 0
    $(window).scroll(function(){
        var currentScrollTop = $(this).scrollTop();
        if(currentScrollTop > lastScrollTop){
            $('.logo-dropdown img').css('transform', 'scale(1.2,1.2)'); // scroll down
        } else {
            $('.logo-dropdown img').css('transform', 'scale(1.3,1.3)'); // scroll up
        }
        lastScrollTop = currentScrollTop;
    })
    // Rotate logo img 
    $('.logo-dropdown img').mouseover(function(){
        $('.logo-dropdown img').css({
            'transform': 'rotate(-10deg)',
        }) 
    })
    $('.logo-dropdown img').mouseout(function(){
        $('.logo-dropdown img').css({
            'transform': 'rotate(0deg)',
        }) 
    })
    // Hamburger menu
    $('.hamburger-menu').hide()
    $('.h-submenu').hide()
    $('.hamburger').click(function(){
        $('.hamburger-menu').slideToggle();
    })
    $(window).resize(function(){
        var windowWidth = $(window).width();
        var elementVisibility = $('.hamburger-menu').is(":visible");
        console.log(elementVisibility)
        console.log(windowWidth)
        if(windowWidth >= 768 && elementVisibility == true){
            $('.hamburger-menu').hide();
        } 
    })
    $('.arrow').each(function(){
        $(this).click(function(){
            var isClicked = $(this).data('clicked', true);
            var arrowImg = $(this).attr('src');
            if(isClicked && (arrowImg == 'assets/images/dropdown/expand-arrow.png')){
                $(this).parents(1).children('.h-submenu').stop().slideDown();
                $(this).attr('src', 'assets/images/dropdown/collapse-arrow.png')
            } else if(isClicked && (arrowImg == 'assets/images/dropdown/collapse-arrow.png')){
                $(this).parents(1).children('.h-submenu').stop().slideUp();
                $(this).attr('src', 'assets/images/dropdown/expand-arrow.png')
            }
        }) 
    })
    // Parallax
    $(window).scroll(function(){
        var parallax = $('.parallax-bg');
        var scrollPosition = $(this).scrollTop();
        parallax.css({
            'transform': 'translateY('+(-scrollPosition*0.2)+'px)'
        });
    })
    // Header 3
    // VANTA.CELLS({
    //     el: ".header3",
    //     mouseControls: true,
    //     touchControls: true,
    //     gyroControls: false,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     color1: 0x152011,
    //     color2: 0x737daa
    //   })
    VANTA.NET({
        el: ".header3",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7b73c0,
        backgroundColor: 0x000,
        maxDistance: 15.00,
        spacing: 17.00
      })
    // Header 4
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/configs/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
    // SVG
    var svgWidth = $('.svg').width();
    var svgHeight = $('.svg').height();
    $('.svg').css({
        'width': svgWidth,
        'height': svgHeight
    });
    // Gallery 1
    $('.small a').click(function(e){
        if($('.big img').attr('src') !== $(this).attr('href')){
            $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault(); // block standard link behavior
    });
    $('.button').click(function(){
        $('.gallery-1').slideToggle(300);
        if ($('.button').text() == '-'){
            $('.button').text('+');
        } else {
            $('.button').text('-');
        }
    })
    $('.small a img').click(function(){
        $('.small a img').fadeTo(500, 1).css({
            'border': 'none'
        })
        $(this).fadeTo(500, 0.6).css({
            'border': '2px dotted #babbb9'
        });
    })
    // Gallery 2
    $('.next').click(function(){
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if(nextImg.length){
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10)
        } else {
            currentImg.removeClass('active').css('z-index', -10);
            $('.start').addClass('active').css('z-index', 10)
        }
    })
    $('.prev').click(function(){
        var currentImg = $('.active');
        var prevImg = currentImg.prev();
        if(prevImg.length){
            currentImg.removeClass('active').css('z-index', -1);
            prevImg.addClass('active').css('z-index', 1)
        } else {
            currentImg.removeClass('active').css('z-index', -1);
            $('.end').addClass('active').css('z-index', 1)
        }
    })

    // Gallery 3
    function showGallery(){
        if($(window).width() <= 500){
            $('.container-gallery-3').hide()
        } else {
            $('.container-gallery-3').show()
        }
    }
    function resizeElements(){
        var containerWidthCoefficient
        var windowWidth = $(window).width();
        if(windowWidth < 768){
            containerWidthCoefficient = 1;
        } else {
            containerWidthCoefficient = 0.9
        }
        var imgWidth = windowWidth*containerWidthCoefficient;
        var imgHeight = imgWidth*0.562;
        $('.slider img').css({
            'width': imgWidth,
            'height': imgHeight
        })
    }
    function cycleGallery(){
        $('.slider').cycle({
            fx: 'fade',
            speed: 2000,
            timeout: 5000
        })
        $('.slider img').mouseover(function(){
            $('.slider').cycle('pause');
        }); 
        $('.slider img').mouseout(function(){
            $('.slider').cycle('resume');
        }); 
    }
    showGallery()
    resizeElements()
    cycleGallery()
    $(window).resize(function() {
        showGallery()
        resizeElements()
    });
    // Google map 1, 2
    var windowWidth = $(window).width();
    // Phone change depending on screen width
    if(windowWidth < 768){
        $('.call-desctop-tablet').hide();
        $('.call-mobile').show()
    } else {
        $('.call-mobile').hide()
    }
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 768){
            $('.map-h').hide();
            $('.map').show()
        } else {
            $('.map-h').show();
            $('.map').hide()
        }
    })
    // Switch mobile map version - desktop/table map version
    if(windowWidth < 780){
        $('.map-h').hide();
        $('.map').show()
    } else {
        $('.map').hide()
    }
});