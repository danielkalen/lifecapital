jQuery(document).ready(function($){

	var $windowHeightTrue = $(window).height();
	var $windowHeight = $windowHeightTrue - 121;


	if ($windowHeightTrue > 570) { //Check window height
		$$('.hero').height($windowHeight); //Greater than 570px
	} else if ($windowHeightTrue < 570) {
		$$('.hero').height(690); //Less than 570px
	}


	$(window).on('resize', function(){
		var $windowHeightTrue = $(window).height();
		var $windowHeight = $windowHeightTrue - 121;

		if ($windowHeightTrue > 570) { //Check window height
			$$('.hero').height($windowHeight); //Greater than 570px
		} else if ($windowHeightTrue < 570) {
			$$('.hero').height(728); //Less than 570px
		}


	});

});