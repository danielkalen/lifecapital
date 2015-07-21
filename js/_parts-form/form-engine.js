var proceed,
	problem,
	$required,
	$currentStep,
	$previousStep,
	$lastField	
	;

function normalKeycodes(event){
	if (   event.keyCode === 8                              // backspace
	    || event.keyCode === 9 								// tab
	    || event.keyCode === 16 							// shift
	    || event.keyCode === 17 							// ctrl
	    || event.keyCode === 18 							// alt
	    || event.keyCode === 46                             // delete
	    || (event.keyCode >= 35 && event.keyCode <= 40)     // arrow keys/home/end

	    || (event.keyCode >= 48 && event.keyCode <= 57)     // numbers on keyboard
	    || (event.keyCode >= 96 && event.keyCode <= 105)    // number on keypad
	  
	    || (event.keyCode === 32 || event.keyCode === 189 || event.keyCode === 190 || event.keyCode === 173)    // space, dash, dot
	 ) {
	  	return true;
	} else {
		return false;
	}
}



var formHasExternalButtons = true,
	multiStep;




$.fn.form = function($arg, $url) {
	$this = this;
	multiStep = $this.find('.step').length > 1; 

	// ==== Partner section vars =================================================================================
	var partnerShown = false;
	var partnerWrapHeight = $$('.partner').height();
		$$('.partner').height(0); // Initial height reset to 0
	/* ========================================================================== */

	$this.formPrepare();

	$this.on('click', '.next', function(){
		if ( $(this).hasClass('call') ) $this.formNext('call');
		if ( $(this).hasClass('apply') ) $this.formNext('apply');

		if ( !$(this).hasClass('call') && !$(this).hasClass('apply') ) $this.formNext();
	});

	$this.on('click', '.back', function(){
		$this.formBack();
	});

	$this.on('click', '.submit', function(){
		if ( $(this).hasClass('callform') ) {
			$this.formSubmit('callform');
		}
		if ( $(this).hasClass('webform') ) {
			$this.formSubmit('webform');
		}
	});


	// ==== Partner conditional fields =================================================================================


	// 'YES' click
	$$('.fieldset.additional_partners').children('.input-button').first().on('click', function(){
		partnerShown = true;
		$$('.partner')
			.velocity('stop')
			.velocity({height: partnerWrapHeight}, {duration: 1100, easing: 'easeInOutQuint'} );
		$$('.step.final')
			.velocity('stop')
			.velocity( {height: $$('.step.final').data('height') + partnerWrapHeight}, {duration: 1100, easing: 'easeInOutQuint'} ); // Increase current step height.

		$$('.partner').find('.fieldset').each(function(){
			$(this).addClass('required').removeClass('valid');
		});
	});

	// 'NO' click
	$$('.fieldset.additional_partners').children('.input-button').last().on('click', function(){
		if (partnerShown) {
			$$('.partner')
				.velocity('stop')
				.velocity({height: 0}, {duration: 1100, easing: 'easeInOutQuint'} );
			$$('.step.final')
				.velocity('stop')
				.velocity( {height: $$('.step.final').data('height')}, {duration: 1100, easing: 'easeInOutQuint'} ); // Bring current step's height back to normal
			
			$$('.partner').find('.fieldset').each(function(){
				$(this).removeClass('required error').addClass('valid');
			});
		}
	});




	// ==== Terms agreement name autofill =================================================================================
	$$('#firstname, #lastname').on('change keyup', function(){
		updateTermsName();
	});



	// ==== Skip Calculator links =================================================================================
	$$('#skip-to-app').on('click', function(){
		nextSection($$('.step.apply'), 'apply-skipped_to');
		$$('#skipped').val('true');
	});
	$$('#skip-to-call').on('click', function(){
		nextSection($$('.step.call'), 'call-skipped_to');
		$$('#skipped').val('true');
	});


	if (multiStep) {
		$window.on('resize', function(){
			if ( window.innerWidth <= 920 ) {
				saveSectionHeights( $this.find('.step') );
			}
		});
	}

}











$.fn.formPrepare = function() {	
	var $this = this;

	if ( multiStep ) {
		saveSectionHeights( $this.find('.step') );
		
		// Initial height set
		$this.find('.step').first().addClass('show').each(function(){
			var $this = $(this);
			$this.height( $this.data('height') );
		});
	}





	$this.find('.fieldset').not('.radio, .checkbox').each(function(){
		$.fn.formPrepare.inputField($(this));
	});

	$this.find('.fieldset.checkbox').each(function(){
		$.fn.formPrepare.checkboxField($(this));
	});

	$this.find('.fieldset.radio').each(function(){
		if ( !$(this).hasClass('disabled') ) {
			$.fn.formPrepare.radioField($(this));
		}
	});

	$this.find('.fieldset.range').each(function(){
		$.fn.formPrepare.rangeField($(this));
	});


	$this.find('.phone, .zip, .cardnumber, .cardcvc, .carddate').each(function(){
		$.fn.formPrepare.numberField($(this));
	});

	$this.find('.email').each(function(){
		$.fn.formPrepare.emailField($(this));
	});

	// Prevent tab switch to the next (invisible) field
	$this.find('.step').each(function(){
		$lastField = $(this).find('.fieldset').not('.checkbox').last();

		$lastField.on('keydown', function(e){
			if ( e.keyCode === 9 ) e.preventDefault();
		});
	});

	$this.find('.input').each(function(){
		// $this = $(this);
		attachEvents( $(this) );
	});


	if ( $this.find('.state').length ) {
		appendStateList();
	}
	if ( $this.find('.country').length ) {
		appendCountryList();
	}
}




$.fn.formValidate = function() {
	var $this = this;

	proceed = false;
	problem = false;
	$required = $this.find('.step.show').find('.fieldset.required');

	$required.each(function(){

		var $this = $(this);

		if ( !$this.hasClass('valid') ) {
			problem = true;
			$this.addClass('error');

			if ( $this[0] === $required.first()[0] ) {
				scrollUpIfNeeded($this); // If window is scrolled more than the first field.
			}

		} else {
			$this.removeClass('error');
		}
	});

	if ( problem ) {
		proceed = false;
	} else {
		proceed = true;
	}
}



$.fn.formValidateCalcStep = function() {
	var $this = $$('#cta');

	proceed = false;
	problem = false;
	$required = $this.find('.step.show').find('.fieldset.required');

	$required.each(function(){

		var $this = $(this);

		if ( !$this.hasClass('valid') ) {
			problem = true;
		}
	});

	if ( problem ) {
		proceed = false;
		$this.removeClass('ready');
	} else {
		proceed = true;
		$this.addClass('ready');
	}
}






$.fn.formNext = function(specialType) {
	var $this = this;
	$currentStep = $this.find('.step.show');

	$this.formValidate();

	if ( proceed ) {
		var $nextStep = $currentStep.next();
		if ( specialType === 'apply' ) $nextStep = $currentStep.next().next();

		nextSection($nextStep, specialType);
	}
}







$.fn.formBack = function() {
	var $this = this;

	$currentStep = $this.find('.step.show');
	$previousStep = $currentStep.prev();

	nextSection($previousStep);
	scrollUpIfNeeded($previousStep);
}









$.fn.formSubmit = function(type) {
	var $this = this;

	$this.formValidate();

		if ( proceed ) {

			if ( $$('#skipped').val() === 'true' ) {
				$$('.step.calc').remove();
			}

			if ( type === 'callform' ) {
				$$('.step.apply, .step.final, .step.calc').remove();
				processSubmit('callform');
			}
			if ( type === 'webform' ) {
				$$('.step.call, .step.calc').remove();

					// ==== Save signature data =================================================================================
					var $data = $$('#signature-pad').jSignature("getData"),	
						$dataTwo = $$('#signature-pad').jSignature("getData", "image");
					$$('#signature-data').val($data);
					$$('#signature-img').val($dataTwo);

					// ==== Save signature DATE =================================================================================
					var date = new Date(),
						signDate = (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getFullYear();

					$$('#signature-date').val(signDate);

				processSubmit('webform');
			}
		}

	function processSubmit(type) {
		var $gearIcon = '<span class="cta-form-buttons-item-text-icon gear"></span>',
			$calculateText = '<span class="cta-form-buttons-item-text-hidden">Submitting</span>',
			$currentSection = $$('.step.final');
		if ( type === 'callform' )	$currentSection = $$('.step.call');

		$$('.cta-form-buttons-item.' + type).addClass('active')
					.children('.cta-form-buttons-item-text').html($gearIcon + $calculateText);

		setTimeout(function(){
			hideSection($currentSection);
		}, 400);

		setTimeout(function(){
			$('.cta-form-buttons-item-text-icon').velocity({translateX: -75}, {duration:500, easing: 'easeInOutCirc'});
			
			setTimeout(function(){
				$('.cta-form-buttons-item-text-hidden').velocity({opacity: 1}, {duration: 300});
				$('.cta-form-buttons-item-text-icon').velocity({rotateZ: 720}, {duration:2700, easing: 'linear'});
			}, 500);

			// Remove partner fields if there aren't any partners
			// if ( $$('.fieldset.additional_partners').children('.input-button').last().hasClass('checked') ) {
			// 	$$('.partner').remove();
			// }

			// Ajax Call
			var data = $this.serialize();

			// $.post( '/php/'+ type +'.php', data, function(response){
			$.post( '/'+ type , data, function(response){
				setTimeout(function(){
				
					if ( response.success ) {
						$$('.cta-form-buttons-item-text-icon').velocity('stop');
						setTimeout(function(){
							$$('.cta-form-buttons-item-text-hidden').html('Success!');
							
							setTimeout(function(){
								showSection($this.find('.step.success'));
								
								setTimeout(function(){
					          		$$('.icon-success').addClass('animate')
					          			.find('.tip').addClass('animateSuccessTip')
					          			.siblings('.long').addClass('animateSuccessLong');

					          		$$('.cta-form-buttons-item-text').html('Thank You!');
									$('.button.' + type).addClass('complete').removeClass('submit active');
								},700);

							},400);

						}, 500);
					} else {
						$$('.cta-form-buttons-item-text-icon').velocity('stop');
						$$('.cta-form-buttons-item-text').html('Field error! Please validate your input.');

						$.each(response.errorFields, function(fieldIndex, fieldValue){
							log(fieldValue + ' ' + fieldIndex);
							$$('#' + fieldValue).parents('.fieldset').addClass('error');
						});
						showSection($this.find('.step.success').prev());
					}
					
				}, 500);
			}, 'json');


		}, 1800);
	};

}
















function attachEvents($field){
	$field.focus(function(){
		$(this).parent().addClass('focus');
	});
	$field.blur(function(){
		$(this).parent().removeClass('focus');
	});

	$field.keyup(function(){
		if ( $(this).val() === '' ) {
			$(this).parent().removeClass('filled');
		} else {
			$(this).parent().addClass('filled');
		}
	});

	if ( $field.parent().hasClass('select') ) {
		$field.change(function(){
			if ( $(this).val() !== '' ) {
				$(this).parent().addClass('filled');
			} else {
				$(this).parent().removeClass('filled');
			}
		});
	}

	if ( $field.attr('type') !== 'checkbox' ){
		if ( $field.val() !== '' ) {
			$field.parent().addClass('filled valid');
		}
	}
}



function makeValid($field) {
	$field.addClass('valid').removeClass('invalid error');
}


function makeInvalid($field, error) {
	$field.addClass('invalid').removeClass('valid');

	if (error) {
		$field.addClass('invalid error');
	}
}






function scrollUpIfNeeded($openSection){
	if ( window.scrollY > $openSection.offset().top ) {
		$("html, body").animate({ scrollTop: ($openSection.offset().top - 70) }, 300);
	}
}



function saveSectionHeights($steps){

	$steps.each(function(){
		var $this = $(this),
			$thisHeight = $this.children('div').height() + 90;
		
		if (isMobile) $thisHeight = $thisHeight - 50;

		$this.data('height', $thisHeight);
	});
}



function nextSection($nextSection, specialType){
	if ( $nextSection.hasClass('results') ) { // First step -> results
		calculateApproved();
		var $gearIcon = '<span class="cta-form-buttons-item-text-icon gear"></span>',
			$calculateText = '<span class="cta-form-buttons-item-text-hidden">Calculating</span>';

		$$('.cta-form-buttons-item.calculate').addClass('active')
					.children('.cta-form-buttons-item-text').html($gearIcon + $calculateText);

		setTimeout(function(){
			hideSection($nextSection.prev());
			$$('.cta-skip').velocity({opacity: 0}, {duration: 250});
		}, 400);

		setTimeout(function(){
			$$('.cta-form-buttons-item-text-icon').velocity({translateX: -75}, {duration:500, easing: 'easeInOutCirc'});

			setTimeout(function(){
				$$('.cta-form-buttons-item-text-hidden').velocity({opacity: 1}, {duration: 300});
				$$('.cta-form-buttons-item-text-icon').velocity({rotateZ: 720}, {duration:2700, easing: 'linear'});
			}, 500);
			
			setTimeout(function(){
				$$('.cta-form-buttons-item-text-icon').velocity('stop');
				
				setTimeout(function(){
					showSection($nextSection);
					
					setTimeout(function(){
						$$('.cta-form-buttons-item.webform').addClass('apply').removeClass('active calculate')
							.children('.cta-form-buttons-item-text').html('Apply Online');
					}, 500);
					
					setTimeout(function(){
						$$('.button.next').velocity({width: '50%'}, {duration: 800, easing: 'easeInOutCirc'});
					}, 1400);

				}, 500);

			}, 3200);

		}, 1800);
	}

	if ( specialType ) { // Results -> Apply or Call form
		var delay = 0,
			fromSkipLinks = true;

		if ( specialType === 'apply' ) var opposite = 'call';
		if ( specialType === 'call' ) var opposite = 'apply';

		if ( specialType !== 'apply-skipped_to' && specialType !== 'call-skipped_to' ) {
			$$('.button.' + specialType ).velocity('stop').velocity({width: '100%'}, {duration: 800, easing: 'easeInOutCirc'});
			$$('.button.' + opposite ).velocity('stop').velocity({width: '0%'}, {duration: 800, easing: 'easeInOutCirc'});
			delay = 1000;
			fromSkipLinks = false;
		}


		setTimeout(function(){
			var previousStep = $$('.step.show');
			hideSection(previousStep);
			
			setTimeout(function(){
				showSection($nextSection);
				if (fromSkipLinks) $$('.cta-skip').velocity({opacity: 0}, {duration: 250});

				if ( specialType === 'apply' || specialType === 'apply-skipped_to' ) {
					setTimeout(function(){
						$$('.cta-form-buttons-item.webform').removeClass('apply calculate')
							.children('.cta-form-buttons-item-text').html('Next Step (Owner Info)');
							$this.addClass('ready');
					}, 500);
				}
				if ( specialType === 'call' || specialType === 'call-skipped_to' ) {
					setTimeout(function(){
						$$('.cta-form-buttons-item.callform').removeClass('next').addClass('submit')
							.children('.cta-form-buttons-item-text').html('Submit Call Request');
							$this.addClass('ready');
					}, 500);
				}
				if ( specialType === 'call-skipped_to' ) {
					$$('.button.calculate' ).velocity({width: '0%'}, {duration: 800, easing: 'easeInOutCirc'});
					$$('.button.call' ).velocity({width: '100%'}, {duration: 800, easing: 'easeInOutCirc'});
				}
			}, 1400);

		}, delay);
	}

	if ( !specialType && !$nextSection.hasClass('results') ) { // Apply form -> Final step
		hideSection($nextSection.prev());

		setTimeout(function(){
			showSection($nextSection);

			if ( $nextSection.hasClass('final') ) {
				setTimeout(function(){
					$$('.cta-form-buttons-item.webform').removeClass('next calculate').addClass('submit')
						.children('.cta-form-buttons-item-text').html('Submit Application');
				}, 500);
			}

		}, 1400);
	}
		// showSection($section);
		// $section.addClass('show')
		// $section.siblings('.show').height(39).removeClass('show');
}

function showSection($section){
	$section.velocity( {height: $section.data('height')}, {duration: 1100, easing: 'easeInOutQuint'} )
		.addClass('show');
}

function hideSection($section){
	scrollUpIfNeeded($section);
	$section.velocity( {height: 0}, {duration: 1100, easing: 'easeInOutQuint'} )
		.removeClass('show');
}






function appendStateList(){

	$window.one('scroll', function(){
		$.getJSON('js/_parts-form/state.json', '', function(data){
			var items = [];
			$.each(data, function(key, val){
				items.push('<option value="' + key + '">' + val + '</option>');
			});
			$$('.fieldset.state').find('select').append(items);
		});
	});

}

function appendCountryList(){

	$window.one('scroll', function(){
		$.getJSON('js/_parts-form/country.json', '', function(data){
			var items = [];
			$.each(data, function(key, val){
				items.push('<option value="' + key + '">' + val + '</option>');
			});
			$$('.fieldset.country').find('select').append(items);
		});
	});

}






function updateTermsName() {
	var firstname = $$('#firstname').val(),
		lastname = $$('#lastname').val(),
		name = ' ' + firstname + ' ' + lastname + ', ';

	if ( firstname !== '' && lastname !== '' ) {
		$$('.cta-form-terms-name').html(name);
	} else {
		$$('.cta-form-terms-name').html('');
	}
}





function calculateApproved() {
	var $salesAmount = parseInt($$('.cta-form-fieldset-range.sales').find('.noUi-handle').children('div').html()),
		num = Math.round($salesAmount * 1.2) * 1000,
		result = addCommas(num),
		termResult;

	var chosenCredit = $$('.fieldset.credit_score').find('.checked').find('input').attr('val');
	if ( chosenCredit === '0-499' ) 	termResult = 1;
	if ( chosenCredit === '500-640' )	termResult = 2;
	if ( chosenCredit === '650+' ) 		termResult = 3;

	$$('.results').find('.cta-form-fieldset-radio').slice(0, termResult).addClass('checked');

	$$('.results-approved-amount-number').html(result);
};


function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

