// @codekit-prepend '../_plugins/jquery.inputmask.min.js'
// @codekit-prepend '../_plugins/jquery.inputmask.date.min.js'
// @codekit-prepend '../_plugins/jquery.nouislider.all.min.js'
// @codekit-prepend '../_plugins/jSignature.min.js'

	/* ==========================================================================
	   Scroll up on mobile during form
	   ========================================================================== */

		function scrollForMobile() {

			var $formOffset = $('form').offset().top;
			var $windowScroll = $(window).scrollTop();
			var $formScroll = $formOffset - 70;

			if ($formOffset - $windowScroll < 0) {
				$("html, body").animate({ scrollTop: $formScroll }, 300);
			}
		}
	/* ========================================================================== */












	/* ==========================================================================
	   Range Slider
	   ========================================================================== */

	$('.fieldset .range.volume').noUiSlider({
		start: [ 50000 ],
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
		start: [ 320000 ],
		step: 10000,
		range: {
			'min': [  0 ],
			'max': [ 950000 ]
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
		Signature Pad   
	   ========================================================================== */

   $('#signature').jSignature();

   $('#signature').on('click mousedown mouseup touchstart touchmove',function(){
   		$('.fieldset.sign').removeClass('error');
   		makeReadyFinal();
   });

   $('.signature-clear').click(function(){
		$('#signature').jSignature("reset");	
   		$('.fieldset.sign').addClass('error');
   		$('form').removeClass('ready');
   });

	/* ========================================================================== */












	/* ==========================================================================
	   Radio Button Replacement
	   ========================================================================== */
	
	$('.choice').click(function(){
		$(this).parents('.fieldset').removeClass('error');

		$(this).siblings().removeClass('checked');
		$(this).addClass('checked');
		$(this).find('.radio').prop('checked', true);
	});	

	$('.step.one .choice').click(function(){makeReady();});
	$('.step.four .choice').click(function(){makeReadyFinal();});
	
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
	   Inputmask
	   ========================================================================== */

	   function inputMasking() {
		   var $filledCheckAdd = function(){$(this).parents('.fieldset').addClass('filled');};
		   var $filledCheckRemove = function(){$(this).parents('.fieldset').removeClass('filled');};

		   $('.business_phone input, .call_phone input').inputmask('(999)-999-9999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.zip input').inputmask('99999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.ssn input').inputmask('999-99-9999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.ownership input').inputmask({ mask: '99[9]%', greedy: false, 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.tax_id input').inputmask('99-9999999', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.date input').inputmask('mm/dd/yyyy', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
		   $('.call_time input').inputmask('hh:mm t', { 'oncomplete':$filledCheckAdd, 'onincomplete':$filledCheckRemove });
	   }

	   inputMasking();  // Init Input Mask Script


	/* ========================================================================== */
















	/* ==========================================================================
	   Skip Calculator
	   ========================================================================== */

	$('#application').click(function(){
		$('#skipped').val('yes');
		$('#skip').animate({'opacity': '0'}, 400);
		setTimeout(function(){
			$('form').addClass('ready').addClass('one-exit').addClass('apply').addClass('skipped');
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('form').addClass('three-enter').removeClass('ready');
		},1800);
		setTimeout(function(){
			$('.button.calculate p').html('Next Step (Owner Info)');
			$('.button.calculate').removeClass('active, calculate').addClass('owner-info');
		},2200)
	});


	$('#schedule').click(function(){
		$('#skipped').val('yes');
		$('#skip').animate({'opacity': '0'}, 400);
		setTimeout(function(){
			$('form').addClass('ready').addClass('one-exit').addClass('call').addClass('skipped');
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('form').addClass('three-enter').removeClass('ready');
		},1800);
	});

	/* ========================================================================== */	











	/* ==========================================================================
	   Form Button Press
	   ========================================================================== */
	
	
	$('.button.calculate').on('click', function(){ 	//	step one
		var $iconGear = '<span class="icon-gear"></span>';
		var $calculateText = '<span class="text">Calculating</span>';
		var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

		if ( !$(this).hasClass('apply') && !$(this).hasClass('owner-info') && !$(this).hasClass('submit') && !$(this).hasClass('done') ) {
			makeReady();
			if ( $('form').hasClass('ready') ) {		// Check if is ready
				$('#skip').hide();
				$('form').removeClass('error-show');
				$('.button.calculate p').html($iconGear);
				$('.button.calculate').addClass('active');
				setTimeout(function(){
					$('form').addClass('one-exit');
					scrollForMobile();
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
			} else {
				$('form').addClass('error-show');
			}



		$('.button.call').click(function(){		//		Call Button Click

			if ( !$('form').hasClass('two-exit') ) {
				$('form').addClass('call');
				setTimeout(function(){
					$('form').addClass('two-exit');
					scrollForMobile();
				},1000);
				setTimeout(function(){
					$('form').addClass('three-enter').removeClass('ready');
				},2300);
			}

			if ( $('form').hasClass('three-enter') && $('form').hasClass('ready') ) {
				formSubmitCall();
			}

			if ( $('form').hasClass('three-enter') && !$('form').hasClass('ready') ) {
				makeReadyCall();
				$('form').addClass('error-show');
			}

		});

		}



		if ( $(this).hasClass('apply') ) {		//		Apply Online Button Click
			$(this).addClass('active');
			$('form').addClass('apply');
			setTimeout(function(){
				$('form').addClass('two-exit');
				scrollForMobile();
			},1000);
			setTimeout(function(){
				$('form').addClass('three-enter');
			},2400);
			setTimeout(function(){
				$('form').removeClass('ready');
				$('.button.apply p').html('Next Step (Owner Info)');
				$('.button.apply').removeClass('active, apply').addClass('owner-info');
				$('.button.owner-info').removeClass('active');
			},2700);
		}

		if ( $(this).hasClass('owner-info') && $('form').hasClass('three-enter') ) {     //   Proceed to Owner Info Click
			makeReadyNext();
			
			if ( $('form').hasClass('ready') ) {
				$(this).addClass('active');
				$('form').removeClass('divide-buttons');
				setTimeout(function(){
					$('form').addClass('three-exit');
					scrollForMobile();
				},100);
				setTimeout(function(){
					$('form').addClass('four-enter');
				},1400);
				setTimeout(function(){
					$('form').removeClass('ready');
					$('.button.owner-info p').html('Submit Form');
					$('.button.owner-info').removeClass('owner-info').addClass('submit');
					$('.button.submit').removeClass('active');
				},1800);
			} else {
				$('form').addClass('error-show');
			}


		}

		if ( $(this).hasClass('submit') ) {
			makeReadyFinal();	//	Call Validation Final
			if ( $('form').hasClass('ready') ) {
				// alert('ready');
				formSubmit();	//	Call The Submit Funciton
			}
			
			if ( !$('form').hasClass('ready') ) {
				$('form').addClass('error-show');
			}
		}
	});	




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
   Form Readiness
   ========================================================================== */

	/* 
	   Calling The Validator
	   ========================================================================== */

	$('.step.one .fieldset.input input').blur(function(){makeReady();});

	$('.step.three.call .fieldset.input input').blur(function(){makeReadyCall();});

	$('.step.three.apply .fieldset.input input, .step.three.apply textarea').blur(function(){makeReadyNext();});
	$('.step.three.apply .fieldset.select select').change(function(){makeReadyNext();});

	function stepFourFieldBlur() {
		$('.step.four .fieldset.input input').blur(function(){makeReadyFinal();});
		$('.step.four .fieldset.select select').change(function(){makeReadyFinal();});
	}
	stepFourFieldBlur();

	$('.fieldset.input.first_name input, .fieldset.input.last_name input').change(function(){updateTerms();});

	/* ========================================================================== */


	$$('.noUi-handle').on('mousedown', function(){
		$this = $(this);

		$window.on('mousemove', function(){
			isDragging = true;
			$this.find('div').trigger('modified');
		});

		$window.on('mouseup', function(){
			if (isDragging) {
				isDragging = false;
				$window.off('mousemove');
				$window.off('mouseup');
			}
		});
	});

	$$('.noUi-base').on('click', function(){
		$$('.noUi-handle div').trigger('modified')
	});

	$$('.noUi-handle div').on('modified',function(){
		console.log('mousemove');
		$(this).parents('.fieldset').removeClass('error');
		makeReady();

		var $volumeNum = parseInt($('.fieldset .range.volume .noUi-handle div').html());
		var $salesNum = parseInt($('.fieldset .range.sales .noUi-handle div').html());

			if ($volumeNum < 29) {
				$('form').addClass('hide-start-volume');
			} else if ($volumeNum > 29) {
				$('form').removeClass('hide-start-volume');
			} 

			if ($volumeNum > 118) {
				$('form').addClass('hide-end-volume');
			} else if ($volumeNum < 118) {
				$('form').removeClass('hide-end-volume');
			}




			if ($salesNum < 200) {
				$('form').addClass('hide-start-sales');
			} else if ($salesNum > 200) {
				$('form').removeClass('hide-start-sales');
			}

			if ($salesNum > 740) {
				$('form').addClass('hide-end-sales');
			} else if ($salesNum < 740) {
				$('form').removeClass('hide-end-sales');
			}

			$('#credit_volume').val($volumeNum * 1000);
			$('#gross_sales').val($salesNum * 1000);
	});



function makeReady() {
	var $inputEmpty = $('.step.one .fieldset.input input').val();
	var $monthsEmpty = $('.choices.months .choice').hasClass('checked');
	var $creditEmpty = $('.choices.credit .choice').hasClass('checked');
	var $volumeEmpty = $('.fieldset .range.volume .noUi-handle div').html() != '40,000';
	var $salesEmpty = $('.fieldset .range.sales .noUi-handle div').html() != '350,000';

		if ($inputEmpty == 0) {
			$('.step.one .fieldset.input').addClass('error');
		} else if ( $inputEmpty !=0 ) {
			$('.step.one .fieldset.input').removeClass('error');
		}

		if (!$monthsEmpty) {
			$('.choices.months').addClass('error');
		} else {
			$('.choices.months').removeClass('error');
		}

		if (!$creditEmpty) {
			$('.choices.credit').addClass('error');
		} else {
			$('.choices.credit').removeClass('error');
		}

		if (!$volumeEmpty) {
			$('.fieldset.range.volume').addClass('error');
		} else {
			$('.fieldset.range.volume').removeClass('error');
		}

		if (!$salesEmpty) {
			$('.fieldset.range.sales').addClass('error');
		} else {
			$('.fieldset.range.sales').removeClass('error');
		}



	if ( !$('.step.one .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}


function makeReadyCall() {

	$('.step.three.call .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.call .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});




	if ( !$('.step.three.call .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}
}









function makeReadyNext() {
	$('.step.three.apply .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.select select').each(function(){		//	Select Fields Validation
		if ( $(this).val() == 'none' ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.three.apply .fieldset.textarea textarea').each(function(){		//	textarea Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});





	if ( !$('.step.three.apply .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}









function makeReadyFinal() {
	$('.step.four .fieldset.input input').not('.optional, .has-inputmask').each(function(){		// Regular Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.four .fieldset.inputmask').not('.optional').each(function(){		// Inputmask Fields Validation
		if ( !$(this).hasClass('filled') ) {
			$(this).addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).removeClass('error');
		}
	});

	$('.step.four .fieldset.select select').each(function(){		//	Select Fields Validation
		if ( $(this).val() == 'none' ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	$('.step.four .fieldset.textarea textarea').each(function(){		//	textarea Fields Validation
		if ( $(this).val() == 0 ) {
			$(this).parents('.fieldset').addClass('error');
			$('form').removeClass('ready');
		} else {
			$(this).parents('.fieldset').removeClass('error');
		}
	});

	// $('.step.four .choice').each(function(){		//	Choice Field Validation
		if ( !$('.step.four .choice').hasClass('checked') ) {
			$('.step.four .choices').addClass('error');
			$('form').removeClass('ready');
		} else {
			$('.step.four .choices').removeClass('error');
		}
	// });







	if ( !$('.step.four .fieldset').hasClass('error') ) {	// Make Form Ready
		$('form').addClass('ready').removeClass('error-show');
	}

}

function updateTerms() {
	var $first_name = $('.fieldset.input.first_name input');
	var $last_name = $('.fieldset.input.last_name input');
	var $mergedName = ', ' + $first_name.val() + ' ' + $last_name.val() + ', ';
	if ( $first_name.val() != 0 && $last_name.val() != 0 ) {
		$('.terms-name').html($mergedName);
	}

}

/* ========================================================================== */
















/* ==========================================================================
   Form Submission
   ========================================================================== */

function formSubmit() {

	/* 
   Signature Append
   ========================================================================== */

	var $data = $('#signature').jSignature("getData");	
	var $dataTwo = $('#signature').jSignature("getData", "image");
		$('#sign').val($data);
		$('#img').val($dataTwo);
	/* ========================================================================== */



	/* 
   Date Append
   ========================================================================== */
	var $currentDate = new Date();
	var $date_day =  $currentDate.getDate();
	var $date_month = $currentDate.getMonth() + 1;
	var $date_year = $currentDate.getFullYear();
	var $sign_date = $date_month + '-' + $date_day + '-' + $date_year;

	$('#sign_date').val($sign_date);
	/* ========================================================================== */




	$('.button.submit p').html('<span class="icon-gear"></span>');
	$('.button.submit').addClass('active');
	setTimeout(function(){
		$('form').addClass('four-exit')
		scrollForMobile();
	},400);
	setTimeout(function(){
		$('.button.submit p').append('<span class="text">Submitting</span>');
		setTimeout(function(){
			$('.button.submit p .text').animate({opacity:1},300);
		},500);
		$('.button.submit p .icon-gear').addClass('move spin');
	},1800);

	var $data = $('form').serialize();
	setTimeout(function(){
		$.post( 'php/application.php', $data)
		.done(function(response) {
			$('.button.submit p .icon-gear').removeClass('spin');
			$('.button.submit p .text').html('Success!');
			setTimeout(function(){
				$('form').addClass('success-enter');
			},900);
			setTimeout(function(){
          		$('.icon-success').addClass('animate');
          		$('.icon-success .tip').addClass('animateSuccessTip');
          		$('.icon-success .long').addClass('animateSuccessLong');
				$('.button.submit p').html('Thank You!');
				$('.button.submit').addClass('done').removeClass('submit').removeClass('active');
			},1600);
		} );
	},2200);
}

function formSubmitCall() {
		$('.button.call p').html('<span class="icon-gear"></span>');
		$('.button.call').addClass('active');
		setTimeout(function(){
			$('form').addClass('three-exit')
			scrollForMobile();
		},400);
		setTimeout(function(){
			$('.button.call p').append('<span class="text">Submitting</span>');
			setTimeout(function(){
				$('.button.call p .text').animate({opacity:1},300);
			},500);
			$('.button.call p .icon-gear').addClass('move spin');
			$('form').removeClass('divide-buttons');
		},1800);

		var $data = $('form').serialize();
		setTimeout(function(){
			$.post( 'php/application.php', $data)
			.done(function(response) {
				$('.button.call p .icon-gear').removeClass('spin');
				$('.button.call p .text').html('Success!');
				setTimeout(function(){
					$('form').addClass('success-enter');
				},900);
				setTimeout(function(){
          		$('.icon-success').addClass('animate');
          		$('.icon-success .tip').addClass('animateSuccessTip');
          		$('.icon-success .long').addClass('animateSuccessLong');
					$('.button.call p').html('Thank You!');
					$('.button.call').addClass('done').removeClass('call').removeClass('active');
				},1600);
			} );
		},2200);

}






/* ==========================================================================
   Partner Field Addition
   ========================================================================== */


$('.fieldset.partner .choice.first').click(function(){addPartner();});
$('.fieldset.partner .choice.second').click(function(){removePartner();});

function addPartner() {
	 var $fields = '<p class="step-title partner-title">Partner Information</p><div class="step-four-wrap"> <div class="fieldset partner input half first_name"> <p class="question">First Name</p><div class="wrap"> <input type="text" name="partner_first_name" placeholder="John"> </div></div><div class="fieldset partner input half last_name last"> <p class="question">Last Name</p><div class="wrap"> <input type="text" name="partner_last_name" placeholder="Doe"> </div></div><div class="clearfix-dk"></div><div class="fieldset partner input home_address"> <p class="question">Home Address</p><div class="wrap"> <input type="text" name="partner_home_address"> </div></div><div class="fieldset partner input one-fourth home_city"> <p class="question">City</p><div class="wrap"> <input type="text" name="partner_home_city"> </div></div><div class="fieldset partner select half home_state last"> <p class="question">State</p><div class="wrap"> <select name="partner_home_state"> <option value="none">Select State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District Of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option> </select> </div></div><div class="fieldset partner input one-fourth zip home_zip last"> <p class="question">Zip</p><div class="wrap"> <input type="text" name="partner_home_zip"> </div></div><div class="clearfix-dk"></div><div class="fieldset partner input number one-third ownership"> <p class="question">Ownership</p><div class="wrap"> <input class="has-inputmask" type="text" placeholder="%" name="partner_ownership"> </div></div><div class="fieldset partner inputmask input one-third ssn last"> <p class="question">SSN</p><div class="wrap"> <input class="has-inputmask" type="text" name="partner_ssn"> </div></div><div class="fieldset partner inputmask input date one-third dob last"> <p class="question">Date of birth</p><div class="wrap"> <input class="has-inputmask" type="text" name="partner_dob"> </div></div><div class="clearfix-dk"></div>';
	 $($fields).appendTo('.partner-placeholder');
	 $('form').addClass('expand').removeClass('ready');
	 inputMasking();
	 stepFourFieldBlur();
}
function removePartner() {
	 $('.partner-placeholder').html('');
	 $('form').removeClass('expand');
	 stepFourFieldBlur();
}


/* ========================================================================== */



