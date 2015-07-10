// @codekit-prepend 'form-engine.js'
// @codekit-prepend 'form-engine-fields.js'
// @codekit-prepend '../_plugins/jquery.inputmask.min.js'
// @codekit-prepend '../_plugins/jquery.inputmask.date.min.js'
// @codekit-prepend '../_plugins/jquery.nouislider.all.min.js'
// @codekit-prepend '../_plugins/jSignature.min.js'

$$('#cta').form();


$$('#cta .step.calc').find('.fieldset').each(function(){
	var $this = $(this);
	
	if ( $this.hasClass('input_text') ) {
		$this.on('keydown', function(){
			$$('#cta').formValidateCalcStep();
		})
	}
	if ( $this.hasClass('radio') ) {
		$this.children('.input-button').on('click', function(){
			$$('#cta').formValidateCalcStep();
		})
	}
	if ( $this.hasClass('range') ) {
		$this.find('.noUi-handle div').on('modified', function(){
			$$('#cta').formValidateCalcStep();
		})
	}
});




	/* ==========================================================================
	   Modal (Terms)
	   ========================================================================== */
	
	$$('.cta-form-terms-link').click(function(){
		openModal($$('.cta-form-terms-modal'));
	});
	


	/* ==========================================================================
		Signature Pad   
	   ========================================================================== */

   $$('#signature-pad').jSignature();

   $$('#signature-pad').on('click mousedown mouseup touchstart touchmove',function(){
   		$(this).parents('.fieldset').removeClass('error').addClass('valid');
   });

   $$('.signature-clear').click(function(){
		$$('#signature-pad').jSignature("reset");	
   		$(this).parents('.fieldset').addClass('error').removeClass('valid');
   });

	/* ========================================================================== */






	/* ==========================================================================
	   Inputmask
	   ========================================================================== */

	   function inputMasking() {
		    var maskComplete = function(){ makeValid( $(this).parents('.fieldset') ); },
		   		maskIncomplete = function(){ makeInvalid( $(this).parents('.fieldset') ); },
		   		$maskActions = { 'oncomplete':maskComplete, 'onincomplete':maskIncomplete };


		   $$('.fieldset.zip').find('input').inputmask('99999', $maskActions);
		   $$('.fieldset.date').find('input').inputmask('mm/dd/yyyy', $maskActions);
		   $$('input.phone').inputmask('(999)-999-9999', $maskActions);
		   $$('input[name="ssn"], input[name="partner_ssn"]').inputmask('999-99-9999', $maskActions);
		   $$('input[name="ownership"], input[name="partner_ownership"]').inputmask({ mask: '99[9]%', greedy: false, 'oncomplete':maskComplete, 'onincomplete':maskIncomplete });
		   $$('input[name="tax_id"]').inputmask('99-9999999', $maskActions);
		   $$('input[name="call_time"]').inputmask('hh:mm t', $maskActions);
	   }

	   inputMasking();  // Init Input Mask Script


	/* ========================================================================== */











/* ==========================================================================
   Form Submission
   ========================================================================== */

function formSubmit() {




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



