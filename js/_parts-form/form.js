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







