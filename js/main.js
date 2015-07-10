// @codekit-prepend '_plugins/jquery.min.js'

// @codekit-prepend '_plugins/jquery-cache.js'

// @codekit-prepend '_plugins/fastclick.js'

// @codekit-prepend '_plugins/css_browser_selectors.js'

// @codekit-prepend '_plugins/velocity.min.js'

// @codekit-prepend '_parts-global/_helpers.js'



$$('html').removeClass('no-js')

var $window = $(window),
	$this,
	isDragging
	;


// ==== Windows Smooth Scroll =================================================================================
if ($$('html').hasClass('win')) {
	$window.on('wheel', function(e){
		e.preventDefault();
		$$('html').velocity('stop');
		$$('html').velocity('scroll', { offset: (window.scrollY + (e.originalEvent.deltaY * 3.5)) + 'px', duration: 750, easing: 'easeOutQuart' } );
	});
}



















