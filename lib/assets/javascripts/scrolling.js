/* ---------------------------
		One page scrolling
	*/

$(document).ready(function(){

	/* Initialize */

	if ($('#has-scroll').size() > 0) {
		if ($(window).outerWidth() < 768) { return; }

		$(".page-scroller").onepage_scroll({
		   sectionContainer: ".page",
		   easing: "ease-in-out",
		   animationTime: 1000,
		   pagination: true,
		   updateURL: false,
		   beforeMove: function(index) {
			if ($('body').hasClass('features')) { featureAnimation(index); };
			if ($('body').hasClass('design')) { designAnimation(index); };

		   }
		});
	}

	/* Scrolling functions */

	function featureAnimation(index){

		/* Page 2 */

		if(index == 1){
			$('.page--l02 .line-1a').countTo({
				from: 1,
				to: 8,
				speed: 1500,
				refreshInterval: 50,
			});

			$('.page--l02 .line.line2').countTo({
				from: 1,
				to: 20000,
				speed: 1600,
				refreshInterval: 50,
			});
		}
	};

	function designAnimation(index){
		if(index == 1){
			$('.page__image--r02a').fadeIn(4000);
		}

		if(index == 6){
			$('.r07__image--center').css({
			'left' : $(window).width() / 2 - $('.r07__image--center').width() / 2
		});
		}
	};


});