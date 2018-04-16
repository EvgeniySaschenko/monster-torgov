(function(){
		$('.section__right').addClass('animated');
		$('.section_about-site .section__right').removeClass('animated');
		$('.section__right').waypoint(function(){
			this.element.classList.add('fadeIn');
		},{offset: "100%"});
})();