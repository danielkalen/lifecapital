/* ==========================================================================
   Modal
   ========================================================================== */

$('.stories-list-item').click(function(){
		$this = $(this);
	var $thisModal = $this.find('.stories-list-item-modal')

	$thisModal.addClass('show');
	$$('body').addClass('modal-open')

	$$('body').keydown(function(e) {
		if (e.keyCode == 27) {
			(e).stopPropagation();
			$$('body').removeClass('modal-open');
			$thisModal.removeClass('show');
		}
	});
});
$$('.terms-link').click(function(){
	var $this = $(this).parent().siblings('.stories-list-item-modal');

	$this.addClass('show');
	$$('body').addClass('modal-open');
});



$$('.md-overlay, .stories-list-item-content-close').click(function(e){
	(e).stopPropagation();
	$(this).parents('.stories-list-item-modal').removeClass('show');
	$$('body').removeClass('modal-open');
});



/* ========================================================================== */