(function ($) {
	"use strict";
	// TOP Menu Sticky
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#sticky-header").removeClass("sticky");
			$("#back-top").fadeIn(500);
		} else {
			$("#sticky-header").addClass("sticky");
			$("#back-top").fadeIn(500);
		}
	});

	$(document).ready(function () {
		// mobile_menu
		var menu = $("ul#navigation");
		if (menu.length) {
			menu.slicknav({
				closeOnClick: false,
				prependTo: ".mobile_menu",
				closedSymbol: "+",
				openedSymbol: "-",
			});
		}

		// review-active
		$(".slider_active").owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: true,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			nav: true,
			dots: false,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 1,
					nav: false,
				},
				992: {
					items: 1,
					nav: false,
				},
				1200: {
					items: 1,
					nav: false,
				},
				1600: {
					items: 1,
					nav: true,
				},
			},
		});
		$(".client-slider").slick({
			slidesToShow: 5,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 1700,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 4,
					},
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 2,
					},
				},
			],
		});

		// scroll to bottom show nav color
		$(function () {
			$(document).scroll(function () {
				var $nav = $(".slicknav_menu");
				$nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
			});
		});
		$(document).on("click", ".slicknav_btn", function (e) {
			//toggle class to ul
			$(this).closest(".slicknav_menu").toggleClass("bg_color");
		});
		// review-active
		$(".testmonial_active").owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: true,
			navText: [
				'<img src="img/icons/preview.svg" class="preview_icon" />',
				'<img src="img/icons/next.svg" class="next_icon" />',
			],
			navContainer: "#customNav",
			nav: true,
			dots: true,
			center: true,
			autoplayHoverPause: true,
			autoplaySpeed: 300,
			responsive: {
				0: {
					items: 1,
					dots: true,
					nav: true,
				},
				767: {
					items: 1,
					dots: true,
					nav: true,
				},
				992: {
					items: 1,
					nav: true,
				},
				1200: {
					items: 1,
					nav: true,
				},
				1500: {
					items: 1,
				},
			},
		});

		// review-active
		$(".financial_active").owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			autoplay: true,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			nav: true,
			dots: false,
			autoplayHoverPause: true,
			autoplaySpeed: 800,

			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 1,
					nav: false,
				},
				992: {
					items: 1,
				},
				1200: {
					items: 1,
				},
				1500: {
					items: 1,
				},
			},
		});

		// review-active
		$(".case_active").owlCarousel({
			loop: true,
			margin: 30,
			items: 1,
			autoplay: false,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			nav: true,
			dots: true,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			// dotsData: true,
			center: false,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 3,
					nav: false,
				},
				992: {
					items: 3,
					nav: false,
				},
				1200: {
					items: 3,
					nav: false,
				},
				1500: {
					items: 3,
					nav: true,
				},
			},
		});

		// for filter
		// init Isotope
		var $grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			},
		});

		// filter items on button click
		$(".portfolio-menu").on("click", "button", function () {
			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});
		$("#myform").validate({
			rules: {
				fname: "required",
				lname: "required",
				wemail: "required",
				mobile_code: "required",
				sales_team: "required",
			},
			messages: {
				fname: {
					required: "Please complete this required field.",
				},
				lname: {
					required: "Please complete this required field.",
				},
				wemail: {
					required: "Please complete this required field.",
				},
				mobile_code: {
					required: "Please complete this required field.",
				},
				sales_team: {
					required: "Please complete this required field.",
				},
			},
		});
		//for menu active class
		$(".portfolio-menu button").on("click", function (event) {
			$(this).siblings(".active").removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});

		// wow js
		new WOW().init();

		// counter
		$(".counter").counterUp({
			delay: 10,
			time: 10000,
		});

		/* magnificPopup img view */
		$(".popup-image").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		/* magnificPopup img view */
		$(".img-pop-up").magnificPopup({
			type: "image",
			gallery: {
				enabled: true,
			},
		});

		/* magnificPopup video view */
		$(".popup-video").magnificPopup({
			type: "iframe",
		});

		// scrollIt for smoth scroll
		$.scrollIt({
			upKey: 38, // key code to navigate to the next section
			downKey: 40, // key code to navigate to the previous section
			easing: "linear", // the easing function for animation
			scrollTime: 600, // how long (in ms) the animation takes
			activeClass: "active", // class given to the active nav element
			onPageChange: null, // function(pageIndex) that is called when page is changed
			topOffset: 0, // offste (in px) for fixed top navigation
		});

		// scrollup bottom to top
		$.scrollUp({
			scrollName: "scrollUp", // Element ID
			topDistance: "4500", // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: "fade", // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});

		// active class for card
		$(".btn_toggle_2").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_2").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_2").addClass("active");
			}
		});
		$(".btn_toggle_3").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_3").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_3").addClass("active");
			}
		});
		$(".btn_toggle_4").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_4").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_4").addClass("active");
			}
		});
		$(".btn_toggle_5").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_5").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_5").addClass("active");
			}
		});
		$(".btn_toggle_6").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_6").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_6").addClass("active");
			}
		});
		$(".btn_toggle_1").on("click", function () {
			if ($(this).attr("aria-expanded") === "true") {
				$(".card_1").removeClass("active");
			}
			if ($(this).attr("aria-expanded") === "false") {
				$(".card_1").addClass("active");
			}
		});
		$(".btn_toggle_1").attr("aria-expanded", "true");

		//brand-active
		$(".brand-active").owlCarousel({
			loop: true,
			margin: 30,
			items: 1,
			autoplay: true,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
			autoplaySpeed: 800,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 4,
				},
				992: {
					items: 7,
				},
			},
		});

		// blog-dtails-page

		//project-active
		$(".project-active").owlCarousel({
			loop: true,
			margin: 30,
			items: 1,
			// autoplay:true,
			navText: [
				'<i class="Flaticon flaticon-left-arrow"></i>',
				'<i class="Flaticon flaticon-right-arrow"></i>',
			],
			nav: true,
			dots: false,
			// autoplayHoverPause: true,
			// autoplaySpeed: 800,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 1,
					nav: false,
				},
				992: {
					items: 2,
					nav: false,
				},
				1200: {
					items: 1,
				},
				1501: {
					items: 2,
				},
			},
		});

		if (document.getElementById("default-select")) {
			$("select").niceSelect();
		}

		//about-pro-active
		$(".details_active").owlCarousel({
			loop: true,
			margin: 0,
			items: 1,
			// autoplay:true,
			navText: [
				'<i class="ti-angle-left"></i>',
				'<i class="ti-angle-right"></i>',
			],
			nav: true,
			dots: false,
			// autoplayHoverPause: true,
			// autoplaySpeed: 800,
			responsive: {
				0: {
					items: 1,
					nav: false,
				},
				767: {
					items: 1,
					nav: false,
				},
				992: {
					items: 1,
					nav: false,
				},
				1200: {
					items: 1,
				},
			},
		});
	});

	// resitration_Form
	$(document).ready(function () {
		$(".popup-with-form").magnificPopup({
			type: "inline",
			preloader: false,
			focus: "#name",

			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function () {
					if ($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = "#name";
					}
				},
			},
		});
	});

	//------- Mailchimp js --------//
	function mailChimp() {
		$("#mc_embed_signup").find("form").ajaxChimp();
	}
	mailChimp();

	// Search Toggle
	$("#search_input_box").hide();
	$("#search").on("click", function () {
		$("#search_input_box").slideToggle();
		$("#search_input").focus();
	});
	$("#close_search").on("click", function () {
		$("#search_input_box").slideUp(500);
	});
	// Search Toggle
	$("#search_input_box").hide();
	$("#search_1").on("click", function () {
		$("#search_input_box").slideToggle();
		$("#search_input").focus();
	});
})(jQuery);
