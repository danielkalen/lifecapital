

jQuery(document).ready(function($){

	var $windowHeightTrue = $(window).height();
	var $windowHeight = $windowHeightTrue - 121;


	if ($windowHeightTrue > 570) { //Check window height
		$('.hero').height($windowHeight); //Greater than 570px
	} else if ($windowHeightTrue < 570) {
		$('.hero').height(690); //Less than 570px
	}


	$(window).on('resize', function(){
		var $windowHeightTrue = $(window).height();
		var $windowHeight = $windowHeightTrue - 121;

		if ($windowHeightTrue > 570) { //Check window height
			$('.hero').height($windowHeight); //Greater than 570px
		} else if ($windowHeightTrue < 570) {
			$('.hero').height(728); //Less than 570px
		}


	});

});










	/* ==========================================================================
	   Radio Button Replacement
	   ========================================================================== */
	
	$('.step.one .choice').click(function(){
		$(this).parents('.fieldset').removeClass('error');

		$(this).siblings().removeClass('checked');
		$(this).addClass('checked');
		$(this).find('.radio').prop('checked', true);
		makeReady();
	});	
	
	/* ========================================================================== */


	/* ==========================================================================
	   Checkbox Button Replacement
	   ========================================================================== */
	
	$('.choice-checkbox').click(function(){

		$(this).parents('.fieldset').removeClass('error');
			
		if ( !$(this).hasClass('checked') ) {
			$(this).addClass('checked');
			$(this).find('.checkbox').prop('checked', true);
		} else {		
			$(this).removeClass('checked');
			$(this).find('.checkbox').prop('checked', false);
		}
	});
	
	/* ========================================================================== */



	/* ==========================================================================
	   Input field error remove on blur
	   ========================================================================== */

	$('.fieldset.input input').blur(function(){
		$(this).parents('.fieldset').removeClass('error');
	});


	/* ========================================================================== */







	/* ==========================================================================
	   Calculator
	   ========================================================================== */
	
	
	$('.button.calculate').on('click.first', function(){ 	//	step one
		var $iconGear = '<span class="icon-gear"></span>'
		var $calculateText = '<span class="text">Calculating</span>';
		var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

		if ( $('form').hasClass('ready') ) {		// Check if is ready
			$('form').removeClass('error-show');
			$('.button.calculate p').html($iconGear);
			$('.button.calculate').addClass('active');
			setTimeout(function(){
				$('form').addClass('one-exit');
			},400);
			setTimeout(function(){
				$('.button.calculate p').append($calculateText);
				setTimeout(function(){
					$('.button.calculate p .text').animate({opacity:1},300);
				},500);
				$('.button.calculate p .icon-gear').addClass('move spin');
				$('.step.two .number span').html(doCalculation($salesNum));
				termCalculation();
			},1800);
			setTimeout(function(){
				$('.button.calculate p .icon-gear').removeClass('spin');
			},6000);
			setTimeout(function(){
				$('form').addClass('two-enter');
			},6500);
			setTimeout(function(){
				$('.button.calculate p').html('Apply Online');
				$('.button.calculate').removeClass('active calculate').addClass('apply');
			},6900);
			setTimeout(function(){
				$('form').addClass('divide-buttons');
			},7900);
		} else {		//	Not Ready
			// $('form').addClass('error-show');
			showErrors();
		}

		// $('.button.calculate').off('click.first');

		$('.button.call').click(function(){
			$('form').addClass('call');
			setTimeout(function(){
				$('form').addClass('two-exit');
			},1000);
			setTimeout(function(){
				$('form').addClass('three-enter');
			},2300);
			setTimeout(function(){
				$('.button.call').addClass('active');
			}, 3700);
		});

		$('.button.apply').click(function(){
			$(this).addClass('active');
			$('form').addClass('apply');
			setTimeout(function(){
				$('form').addClass('two-exit');
			},1000);
			setTimeout(function(){
				$('form').addClass('three-enter');
			},2300);
			setTimeout(function(){
				$(this).removeClass('active');
			},2700);
		});
	});	


	function showErrors(){

		var $inputEmpty = $('.step.one .fieldset.input input').val() == 0;
		var $monthsEmpty = !$('.choices.months .choice').hasClass('checked');
		var $creditEmpty = !$('.choices.credit .choice').hasClass('checked');
		var $volumeEmpty = $('.fieldset .range.volume .noUi-handle div').html() == '40,000';
		var $salesEmpty = $('.fieldset .range.sales .noUi-handle div').html() == '80,000';
		

		$('form').addClass('error-show');

		if ($inputEmpty) {
			$('.step.one .fieldset.input').addClass('error');
		} else {
			$('.step.one .fieldset.input').removeClass('error');
		}

		if ($monthsEmpty) {
			$('.choices.months').addClass('error');
		} else {
			$('.choices.months').removeClass('error');
		}

		if ($creditEmpty) {
			$('.choices.credit').addClass('error');
		} else {
			$('.choices.credit').removeClass('error');
		}

		if ($volumeEmpty) {
			$('.fieldset.range.volume').addClass('error');
		} else {
			$('.fieldset.range.volume').removeClass('error');
		}

		if ($salesEmpty) {
			$('.fieldset.range.sales').addClass('error');
		} else {
			$('.fieldset.range.sales').removeClass('error');
		}

	};


	function doCalculation($salesNum) {
		var $num = Math.round($salesNum * 1.2);
		var $numString = $num.toString() + '000';
		var $numFull = parseInt($numString);
		var $temp = addCommas($numFull);

		return $temp;
	};

	function termCalculation() {

		var $checkedOne = $('.choices.credit .choice.checked');



		if ( $checkedOne.hasClass('first') ) {

			$('.choices.terms').addClass('first');

		}
		if ( $checkedOne.hasClass('second') ) {

			$('.choices.terms').addClass('second');

		}
		if ( $checkedOne.hasClass('third') ) {

			$('.choices.terms').addClass('third');

		}
	};

	function addCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}


	/* ========================================================================== */















	/* ==========================================================================
	   Form Validation
	   ========================================================================== */


	// $('.step.two .choice').click(function(){
	// 	$('.step.two').addClass('radio-filled');
	// 	$('.step.two').removeClass('radio-error');
	// });

	// $('.step.two .choice-checkbox').click(function(){
	// 	if ( $(this).hasClass('checked') ) {
	// 		$('.step.two').addClass('checkbox-filled');
	// 		$('.step.two').removeClass('checkbox-error');
	// 	} else if ( !$(this).hasClass('checked') && !$('.step.two').hasClass('checkbox-filled')) {
	// 		$('.step.two').addClass('checkbox-error no-show');
	// 		$('.step.two').removeClass('checkbox-filled');
	// 	} else if ( !$('.step.two .choice-checkbox').hasClass('checked') ) {
	// 		$('.step.two').addClass('checkbox-error no-show');
	// 		$('.step.two').removeClass('checkbox-filled');
	// 	}
	// });

	// $('.step.three .button').click(function(e){
	// 	var $firstname = $('.step.three .firstname input');
	// 	var $lastname = $('.step.three .lastname input');
	// 	var $email = $('.step.three .email input');
	// 	var $phone = $('.step.three .phone input');
		
	// 	if ( !$firstname.val() ) {
	// 		$('.firstname').addClass('error');
	// 		e.preventDefault();
	// 	} else if ( $firstname.val() ) {		
	// 		$('.firstname').removeClass('error');
	// 	}

	// 	if ( !$lastname.val() ) {
	// 		$('.lastname').addClass('error');
	// 		e.preventDefault();
	// 	} else if ( $lastname.val() ) {	
	// 		$('.lastname').removeClass('error');
	// 	}

	// 	if ( !$email.val() ) {
	// 		$('.email').addClass('error');
	// 		e.preventDefault();
	// 	} else if ( $email.val() ) {	
	// 		$('.email').removeClass('error');
	// 	}

	// 	if ( !$phone.val() ) {
	// 		$('.phone').addClass('error');
	// 		e.preventDefault();
	// 	} else if ( $phone.val() ) {
	// 		$('.phone').removeClass('error');
	// 	}
	// });



	/* ========================================================================== */












/* ==========================================================================
   Modal
   ========================================================================== */

$('.story').click(function(){
	$(this).find('.md-modal').addClass('md-show').removeClass('hide');
	$('body').addClass('modal-open');
});


$('.md-overlay, .icon-cross').click(function(){
	$('.md-modal').removeClass('md-show').addClass('hide');
	$('body').removeClass('modal-open');
});


/* ========================================================================== */











/* ==========================================================================
   Range Slider
   ========================================================================== */

$('.fieldset .range.volume').noUiSlider({
	start: [ 40000 ],
	step: 1000,
	range: {
		'min': [  0 ],
		'max': [ 150000 ]
	},
	format: wNumb({
		decimals: 0,
		thousand: ',',
	})
});

$('.fieldset .range.sales').noUiSlider({
	start: [ 80000 ],
	step: 1000,
	range: {
		'min': [  0 ],
		'max': [ 250000 ]
	},
	format: wNumb({
		decimals: 0,
		thousand: ',',
	})
});
$(".fieldset .range.volume").Link('lower').to('-inline-');
$(".fieldset .range.sales").Link('lower').to('-inline-');


/* ========================================================================== */
















/* ==========================================================================
   Form Readiness
   ========================================================================== */

$('.step.one .fieldset.input input').change(function(){
	makeReady();
});
$('.noUi-handle div').on('DOMSubtreeModified',function(){
	$(this).parents('.fieldset').removeClass('error');
	makeReady();

	var $volumeNum = parseInt($('.fieldset .range.volume .noUi-handle div').html());
	var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

		if ($volumeNum < 25) {
			$('form').addClass('hide-start-volume');
		} else if ($volumeNum > 25) {
			$('form').removeClass('hide-start-volume');
		} 

		if ($volumeNum > 118) {
			$('form').addClass('hide-end-volume');
		} else if ($volumeNum < 118) {
			$('form').removeClass('hide-end-volume');
		}




		if ($salesNum < 40) {
			$('form').addClass('hide-start-sales');
		} else if ($salesNum > 40) {
			$('form').removeClass('hide-start-sales');
		}

		if ($salesNum > 195) {
			$('form').addClass('hide-end-sales');
		} else if ($salesNum < 195) {
			$('form').removeClass('hide-end-sales');
		}
});

function makeReady() {
	var $inputEmpty = $('.step.one .fieldset.input input').val();
	var $monthsEmpty = $('.choices.months .choice').hasClass('checked');
	var $creditEmpty = $('.choices.credit .choice').hasClass('checked');
	var $volumeEmpty = $('.fieldset .range.volume .noUi-handle div').html() != '40,000';
	var $salesEmpty = $('.fieldset .range.sales .noUi-handle div').html() != '80,000';

	if ($inputEmpty && $monthsEmpty && $creditEmpty && $volumeEmpty && $salesEmpty) {
		$('form').addClass('ready');
	} else if ($inputEmpty == 0) {
		$('form').removeClass('ready');
	}
}
function makeReadyCall() {
	var $firstEmpty = $('.fieldset.firstname input').val();
	var $lastEmpty = $('.fieldset.lastname input').val();
	var $phoneEmpty = $('.fieldset.firstname input').hasClass('complete');

	if ($firstEmpty && $lastEmpty && $phoneEmpty) {
		$('form').addClass('ready');
	} else if ($inputEmpty == 0) {
		$('form').removeClass('ready');
	}
}

/* ========================================================================== */















/* ==========================================================================
   Scroll Magic
   ========================================================================== */



function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

function textPrepare ($el) {
		$el.css("opacity", 0);
		$el.css("margin-left", 30);
	}

function stepPrepare ($el) {
		$el.css("opacity", 0);
		$el.css("margin-top", -50);
	}

function titlePrepare ($el) {
		$el.css("opacity", 0);
		$el.css("top", -80);
	}

	var $account = $('.svg-account path');
	var $underwriter = $('.svg-underwriter path');
	var $svgLine = $("#svg-line-1");
	var $circleOne = $("#svg-line-2, .possible li.sixth svg");
	var $circleTwo = $("#svg-line-3, .possible li.fifth svg");
	var $circleThree = $("#svg-line-4, .possible li.fourth svg");
	var $circleFour = $("#svg-line-5, .possible li.third svg");
	var $circleFive = $("#svg-line-6, .possible li.second svg");
	var $circleSix = $("#svg-line-7, .possible li.first svg");
	var $textOne = $(".possible li.sixth p");
	var $textTwo = $(".possible li.fifth p");
	var $textThree = $(".possible li.fourth p");
	var $textFour = $(".possible li.third p");
	var $textFive = $(".possible li.second p");
	var $textSix = $(".possible li.first p");
	var $coinsSVG = $(".svg-coins svg");
	var $stepApply = $(".steps .apply");
	var $stepApprove = $(".steps .approve");
	var $stepFund = $(".steps .fund");
	var $firstTitle = $(".section-one > .title");

	pathPrepare($account);
	pathPrepare($underwriter);
	pathPrepare($svgLine);
	pathPrepare($circleOne);
	pathPrepare($circleTwo);
	pathPrepare($circleThree);
	pathPrepare($circleFour);
	pathPrepare($circleFive);
	pathPrepare($circleSix);

	textPrepare($textOne);
	textPrepare($textTwo);
	textPrepare($textThree);
	textPrepare($textFour);
	textPrepare($textFive);
	textPrepare($textSix);

	stepPrepare($stepApply);
	stepPrepare($stepApprove);
	stepPrepare($stepFund);
	titlePrepare($firstTitle);



	var controller = new ScrollMagic();
	var tween = new TimelineMax()
			.add(TweenMax.to($account, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween2 = new TimelineMax()
			.add(TweenMax.to($underwriter, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween3 = new TimelineMax()
			.add(TweenMax.to($svgLine, 1, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween4 = new TimelineMax()
			.add(TweenMax.to($circleOne, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween5 = new TimelineMax()
			.add(TweenMax.to($circleTwo, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween6 = new TimelineMax()
			.add(TweenMax.to($circleThree, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween7 = new TimelineMax()
			.add(TweenMax.to($circleFour, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween8 = new TimelineMax()
			.add(TweenMax.to($circleFive, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween9 = new TimelineMax()
			.add(TweenMax.to($circleSix, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
	var tween10 = new TimelineMax()
			.add(TweenMax.to($textOne, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween11 = new TimelineMax()
			.add(TweenMax.to($textTwo, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween12 = new TimelineMax()
			.add(TweenMax.to($textThree, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween13 = new TimelineMax()
			.add(TweenMax.to($textFour, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween14 = new TimelineMax()
			.add(TweenMax.to($textFive, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween15 = new TimelineMax()
			.add(TweenMax.to($textSix, 0.3, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween16 = new TimelineMax()
			.add(TweenMax.to($coinsSVG, 0.1, {top: 235, ease:Linear.easeNone}));
	var tween17 = new TimelineMax()
			.add(TweenMax.to($stepApply, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween18 = new TimelineMax()
			.add(TweenMax.to($stepApprove, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween19 = new TimelineMax()
			.add(TweenMax.to($stepFund, 0.1, {opacity: 1, margin: 0, ease:Linear.easeNone}));
	var tween20 = new TimelineMax()
			.add(TweenMax.to($firstTitle, 0.1, {opacity: 1, top: 0, ease:Linear.easeNone}));





	var scene = new ScrollScene({triggerElement: ".svg-account", duration: 1000, tweenChanges: true, offset: 50, triggerHook: 1})
					.setTween(tween)
					.addTo(controller);

	var scene2 = new ScrollScene({triggerElement: ".svg-underwriter", duration: 2400, tweenChanges: true, offset: 150, triggerHook: 1})
					.setTween(tween2)
					.addTo(controller);


	var scene3 = new ScrollScene({triggerElement: ".possible li.first", duration: 600, tweenChanges: true, offset: 100, triggerHook: 1})
					.setTween(tween3)
					.addTo(controller);

	var scene4 = new ScrollScene({triggerElement: "#svg-line-2", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween4)
					.addTo(controller);

	var scene5 = new ScrollScene({triggerElement: "#svg-line-3", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween5)
					.addTo(controller);

	var scene6 = new ScrollScene({triggerElement: "#svg-line-4", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween6)
					.addTo(controller);

	var scene7 = new ScrollScene({triggerElement: "#svg-line-5", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween7)
					.addTo(controller);

	var scene8 = new ScrollScene({triggerElement: "#svg-line-6", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween8)
					.addTo(controller);

	var scene9 = new ScrollScene({triggerElement: "#svg-line-7", duration: 200, tweenChanges: true, offset: 125, triggerHook: 1})
					.setTween(tween9)
					.addTo(controller);

	var scene10 = new ScrollScene({triggerElement: "#svg-line-2", duration: 200, tweenChanges: true, offset: 230, triggerHook: 1})
					.setTween(tween10)
					.addTo(controller);

	var scene11 = new ScrollScene({triggerElement: "#svg-line-3", duration: 200, tweenChanges: true, offset: 210, triggerHook: 1})
					.setTween(tween11)
					.addTo(controller);

	var scene12 = new ScrollScene({triggerElement: "#svg-line-4", duration: 200, tweenChanges: true, offset: 190, triggerHook: 1})
					.setTween(tween12)
					.addTo(controller);

	var scene13 = new ScrollScene({triggerElement: "#svg-line-5", duration: 200, tweenChanges: true, offset: 170, triggerHook: 1})
					.setTween(tween13)
					.addTo(controller);

	var scene14 = new ScrollScene({triggerElement: "#svg-line-6", duration: 200, tweenChanges: true, offset: 150, triggerHook: 1})
					.setTween(tween14)
					.addTo(controller);

	var scene15 = new ScrollScene({triggerElement: "#svg-line-7", duration: 200, tweenChanges: true, offset: 130, triggerHook: 1})
					.setTween(tween15)
					.addTo(controller);

	var scene16 = new ScrollScene({triggerElement: ".svg-coins", duration: 1300, tweenChanges: true, offset: 200, triggerHook: 1})
					.setTween(tween16)
					.addTo(controller);

	var scene17 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 300, triggerHook: 1})
					.setTween(tween17)
					.addTo(controller);

	var scene18 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 500, triggerHook: 1})
					.setTween(tween18)
					.addTo(controller);

	var scene19 = new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 700, triggerHook: 1})
					.setTween(tween19)
					.addTo(controller);

	var scene20 = new ScrollScene({triggerElement: ".section-one", duration: 200, offset: 200, triggerHook: 1})
					.setTween(tween20)
					.addTo(controller);


	// show indicators (requires debug extension)
	// scene16.addIndicators();

/* ========================================================================== */


jQuery(window).load(function(){
	jQuery('#joyride-list').joyride({
		autoStart : true,
	  'tipLocation': 'bottom',         // 'top' or 'bottom' in relation to parent
	  'nubPosition': 'auto',           // override on a per tooltip bases
	  'scrollSpeed': 900,              // Page scrolling speed in ms
	  'timer': 0,                   // 0 = off, all other numbers = time(ms) 
	  'startTimerOnClick': true,       // true/false to start timer on first click
	  'nextButton': true,              // true/false for next button visibility
	  'tipAnimation': 'pop',           // 'pop' or 'fade' in each tip
	  'tipAnimationFadeSpeed': 300,    // if 'fade'- speed in ms of transition
	});
});