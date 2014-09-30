$(document).ready(function(){

	/* Home page section */

	function homeSetup(){

		if($('.page--index').size() < 1){ return; }

		/* width and height fix for home page */
		$('.page--index').height($(window).height()).width($(window).width());

		/* Logo centering */
		$('.logo').css({
			'left' : $(window).width() / 2 - $('.logo').width() / 2,
			'top' : $(window).height() / 2 - $('.logo').height() / 2
		});

		// Links on the side vertical centering
		$('.homelink--features, .homelink--design').css({
			'top' : $(window).height() / 2 - $('.homelink--design').outerHeight() / 2
		})
	}

	$(window).load(function(){ homeSetup(); });
	$(window).bind('resize', function(){ homeSetup(); });

	/* Home fading in */

	if($('.page--index').size() > 0){
		$('.logo').fadeIn(2000, function(){
			$('.homelink').fadeIn(1500);
		});
	}

	/* Navigation Centering */

	function navSetup(){
		var lNavOffset = $(window).height() / 2 - $('.l-nav').outerHeight() / 2;
		$('.l-nav').css({ "top" : lNavOffset });

		var paginationOffset = $(window).height() / 2 - $('.onepage-pagination').outerHeight() / 2;
		$('.onepage-pagination').css({ 'top' : paginationOffset });
	}

	navSetup();
	$(window).bind('resize', function(){ navSetup(); });

	/* up and down controls in the nav */

	$('.navlink-previous').on('click', function(e){
		e.preventDefault();
		$(".main").moveUp();
	});

	$('.navlink-next').on('click', function(e){
		e.preventDefault();
		$(".main").moveDown();
	});

	/* ---------------------------
		Columns
	*/

	$(window).load(function(){
		$('.pagecolumn').each(function(){
			if ($(window).outerWidth() < 768) { return; }
			new column($(this));
		});
	});

	var clickHandler = "click";
	if('ontouchstart' in document.documentElement){clickHandler = "touchstart"; }

	/* Image changer on right hand side 06 */
	$('.r06imageswitcher__button').bind(clickHandler, function(e){
		e.preventDefault();
		if ($(this).hasClass('is-active')) { return; }

		$('.r06imageswitcher__button').removeClass('is-active');

		$('.r06__image').fadeOut();
		$('.r06__image.'+$(this).attr('id')).fadeIn();

		$(this).addClass('is-active');
	})

	/* Centering the mask image on design 7 */

	$('.r07__image--center').css({
		'left' : $(window).width() / 2 - $('.r07__image--center').width() / 2
	});

	$(window).bind('resize', function(){
		$('.r07__image--center').css({
			'left' : $(window).width() / 2 - $('.r07__image--center').width() / 2
		});
	});

});







