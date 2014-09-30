var column = function(column){

	this.element = column;

	this.initialize();
	return this;
}

column.prototype = {

	initialize: function(){
		this.element.hide();
		this.setVerticalPosition();
		this.catchEvents();
	},

	catchEvents: function(){
		var column = this;
		$(window).bind('resize', function(){
			column.setVerticalPosition();
		});
	},

	setVerticalPosition: function(){
		var offset = $(window).height() / 2 - this.element.outerHeight() / 2;
		if (offset < 0) { offset = 0}
		this.element.css({
			'top' : offset
		})
		this.element.fadeIn();
	}
}