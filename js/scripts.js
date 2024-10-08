(function($) {
	$(document).ready(function() {
		"use strict";
		
	
		// WORKS BACKGROUND
		$(".project-box").hover(function () {
		$(".works").css("background-color", $(this).data('bg'));
        $(".works").not(this).each(function(){
            $(this).css("background-color", $(this).data('bg'));
        });
		}, function(){
			$(".works").css("background-color", '');
		});	
		
		
		
		
		// TYPEWRITER ESPAÑOL
			$("#typewriter").typewriter({
				prefix : "",
				text : ["Espera por favor", "Cargando", "Casi listo"],
				typeDelay : 100,
				waitingTime : 1500,
				blinkSpeed : 800
			});
		
		// TYPEWRITER INGLÉS
		$("#typewriter-en").typewriter({
			prefix : "",
			text : ["Please wait", "Still loading", "Almost done"],
			typeDelay : 100,
			waitingTime : 1500,
			blinkSpeed : 800
		});	
		
		// SLIDER
			var swiper = new Swiper('.swiper-slider', {
			speed: 600,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
			});
	
			
		// DATA BACKGROUND IMAGE
			var pageSection = $(".bg-image");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});
	
	
		
		// HAMBURGER MENU
		$('.hamburger').on('click', function(e) {
			if ($(".navigation-menu").hasClass("active")) {
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu").removeClass("active");
				$(".navigation-menu .inner .menu").css("transition-delay", "0s");
				$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");
			} else
			{
				$(".navigation-menu").addClass('active');
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu.active .inner .menu").css("transition-delay", "0.45s");
				$(".navigation-menu.active .inner blockquote").css("transition-delay", "0.50s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0s");
			}
			$(this).toggleClass("active");
		});
		
		// PAGE TRANSITION
		$('body a').on('click', function(e) {
			var url = this.getAttribute("href");

			// Check if the link is internal
			if (url && (this.hostname === window.location.hostname || url.indexOf('#') !== -1)) {

				e.preventDefault();

				if (url.indexOf('#') !== -1) {
					// Link is an anchor
					var hash = url.substring(url.indexOf('#'));

					if ($('body ' + hash).length != 0) {
						$('.transition-overlay').removeClass("active");
						$(".hamburger").toggleClass("open");
						$("body").toggleClass("overflow");
						$(".navigation-menu").removeClass("active");
						$(".navigation-menu .inner ul").css("transition-delay", "0s");
						$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
						$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

						$('html, body').animate({
							scrollTop: $(hash).offset().top
						}, 1000);
					}
				} else {
					// Internal link, but not an anchor
					$('.transition-overlay').toggleClass("active");
					setTimeout(function(){
						window.location = url;
					}, 1000); 
				}

    } else if (url && this.hostname !== window.location.hostname) {
        // External link, open in new tab
        e.preventDefault();
        window.open(url, '_blank');
    }
});

		
		// PAGE HEADER FADE
			var divs = $('header');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 'opacity' : (1 - st/700) });
				divs.css({ 'transition-delay' : ("0s") });
				divs.css({ 'transition' : ("0.05s ease-in-out") });
			});

		
		
		
		});
	// END JQUERY	
	
	
	
	
		// WOW ANIMATION 
			wow = new WOW(
				{
					animateClass: 'animated',
					offset:       0
				}
				);
			wow.init();
	
	
		// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});
	
		// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});
	
	
	
})(jQuery);	