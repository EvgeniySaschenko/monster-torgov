(function(){
		$('.section__right').addClass('animated');
		$('.list-advantages').addClass('animated');
		$('.section_about-site .section__right').removeClass('animated');
		$('.section__right').waypoint(function(){
			this.element.classList.add('fadeIn');
		},{offset: "100%"});

		$('.list-advantages').waypoint(function(){
			this.element.classList.add('bounceInLeft');
		},{offset: "100%"});
})();