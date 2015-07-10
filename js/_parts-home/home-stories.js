/* ==========================================================================
   Modal
   ========================================================================== */

$('.stories-list-item').click(function(){
		$this = $(this);
	var $thisModal = $this.find('.stories-list-item-modal');

	openModal($thisModal)

	$$('body').on('keydown', function(e) {

		if (e.keyCode == 27) {
			(e).stopPropagation();

			closeModal();

			$$('body').off('keydown');
		}
	});
});



$$('.modal-overlay, .modal-close').click(function(e){
	(e).stopPropagation();

	closeModal();
});




var openModal = function($modal){
	$modal.addClass('show');
	$$('body').addClass('modal-open');
}

var closeModal = function(){
	$$('.modal').removeClass('show');
	$$('body').removeClass('modal-open');
}


/* ========================================================================== */