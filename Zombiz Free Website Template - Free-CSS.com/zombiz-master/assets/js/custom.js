$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSINE"
* Template Name : Zombiz HTML Template
* Version       : 1.0
==================================== */




        /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. hcsticky 
3. Counter
4. owl carousel
5. vedio player
6. animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2 . hcsticky 

		$('#menu').hcSticky();


	// 3. counter
		$(window).on('load', function(){	
			$('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		});
	
	
	// 4. owl carousel

		// i. .team-carousel 
	
		
		var owl=$('.team-carousel');
		owl.owlCarousel({
			items:4,
			margin:0,
			
			loop:true,
			autoplay:true,
			smartSpeed:500,
			
			//nav:false,
			//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			
			dots:false,
			autoplayHoverPause:true,
		
			responsiveClass:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			
			
		});

		// ii. .client (carousel)
		
		$('#client').owlCarousel({
			items:5,
			loop:true,
			smartSpeed: 1000,
			autoplay:true,
			dots:false,
			autoplayHoverPause:true,
			responsive:{
					0:{
						items:2
					},
					415:{
						items:2
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			});
			
			
			$('.play').on('click',function(){
				owl.trigger('play.owl.autoplay',[1000])
			})
			$('.stop').on('click',function(){
				owl.trigger('stop.owl.autoplay')
			})

		// iii.  testimonial
		
		$("#testemonial-carousel").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			dots:true,
			mouseDrag:true,
			nav:false,
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'
			// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});

	// 5. vedio player
		$('.vedio-play-icon').magnificPopup({
			
			type:'video'
		
		});	

	// 6. animation support

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").removeClass("animated fadeInLeft").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").addClass("animated fadeInLeft").css({'opacity':'0'});

        });
		
});	

document.querySelector(".carousel-control-prev").onclick = () => plusSlide(-1);
document.querySelector(".carousel-control-next").onclick = () => plusSlide(1);

const slides = document.querySelectorAll(".carousel-item");
const caps = document.querySelectorAll(".cap");

// console.log(slides, caps);

let slideIndex = 1;

function plusSlide(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let time = 1500;

let carouselLoop;

function autoLoopCarousel() {
  carouselLoop = setInterval(() => {
    plusSlide(1);
  }, time * 3);
}

window.onload = () => {
  showSlides(slideIndex);
  autoLoopCarousel();
  capCycle();
  loopCaps();
};

function addClass(element, time) {
  setTimeout(() => {
    element.classList.add("cap-active");
  }, time);
}
function removeClass(element, time) {
  setTimeout(() => {
    element.classList.remove("cap-active");
  }, time);
}

const capCycle = () => {
  addClass(caps[0]);
  removeClass(caps[0], time * 3);
  addClass(caps[1], time * 3);
  removeClass(caps[1], time * 6);
  addClass(caps[2], time * 6);
  removeClass(caps[2], time * 9);
  addClass(caps[3], time * 9);
  removeClass(caps[3], time * 12);
  addClass(caps[4], time * 12);
  removeClass(caps[4], time * 15);
};

let capLoop;
function loopCaps() {
  capLoop = setInterval(capCycle, time * 15);
}

function capSlide(n) {
  showSlides((slideIndex = n));
}
	