// @codekit-prepend '_plugins/jquery.min.js'

// @codekit-prepend '_plugins/jquery-cache.js'

// @codekit-prepend '_plugins/fastclick.js'

// @codekit-prepend '_plugins/css_browser_selectors.js'

// @codekit-prepend '_plugins/TweenMax.min.js'

// @codekit-prepend '_plugins/jquery.scrollmagic.min.js'

// @codekit-prepend '_parts-home/home-hero_height.js'

// @codekit-prepend '_parts-home/home-stories.js'

// @codekit-prepend '_parts-form/form.js'

/* ==========================================================================
   Scroll Magic
   ========================================================================== */

$$('html').removeClass('no-js')

var $window = $(window),
	$this,
	isDragging
	;


	var	$firstTitle = $(".intro").find('.section-title')
		$coinsSVG = $$("#coins"),

		$lineDash = $$("#line-dash"),

		$advertising = $$("#advertising"),
		$inventory = $$("#inventory"),
		$debt = $$("#debt"),
		$cashflow = $$("#cashflow"),
		$expand = $$("#expand"),
		$improve = $$("#improve"),
		$advertisingText = $$(".intro-benefits-content-list-item-text").eq(0),
		$inventoryText = $$(".intro-benefits-content-list-item-text").eq(1),
		$debtText = $$(".intro-benefits-content-list-item-text").eq(2),
		$cashflowText = $$(".intro-benefits-content-list-item-text").eq(3),
		$expandText = $$(".intro-benefits-content-list-item-text").eq(4),
		$improveText = $$(".intro-benefits-content-list-item-text").eq(5),

		$teamAccount = $$('.svg-account path'),
		$teamWriter = $$('.svg-underwriter path'),

		$stepApply = $(".steps .apply"),
		$stepApprove = $(".steps .approve"),
		$stepFund = $(".steps .fund")
		;

	
	// titlePrepare($firstTitle);

	pathPrepare($teamAccount);
	pathPrepare($teamWriter);
	pathPrepare($lineDash);

	// $$(".intro-benefits-content-list-item-text").each(function(){
	// 	textPrepare($(this));
	// });

	// $$(".step-group").each(function(){
	// 	stepPrepare($(this));
	// });



	var controller = new ScrollMagic();
	var tTitle = 			new TweenMax.to( $firstTitle, 0.1, {opacity: 1, y: 0, ease:Linear.easeNone} );
	var tCoins = 			new TweenMax.to( $coinsSVG, 0.1, {y: 235, ease:Linear.easeNone} );
	
	var tLineDash = 		new TweenMax.to( $lineDash, 1, {strokeDashoffset: 0, ease:Linear.easeNone} );

	var tAdvertising = 		new TweenMax.to( $advertising, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tAdvertisingText = 	new TweenMax.to( $advertisingText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );
	var tInventory = 		new TweenMax.to( $inventory, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tInventoryText = 	new TweenMax.to( $inventoryText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );
	var tDebt = 			new TweenMax.to( $debt, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tDebtText = 		new TweenMax.to( $debtText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );
	var tCashflow = 		new TweenMax.to( $cashflow, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tCashflowText = 	new TweenMax.to( $cashflowText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );
	var tExpand = 			new TweenMax.to( $expand, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tExpandText = 		new TweenMax.to( $expandText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );
	var tImprove = 			new TweenMax.to( $improve, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tImproveText = 		new TweenMax.to( $improveText, 0.3, {opacity: 1, x: 0, ease:Linear.easeNone} );

	var tTeamAccount = 		new TweenMax.to( $teamAccount, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tTeamWriter = 		new TweenMax.to( $teamWriter, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone} );

	var tStep1 = 			new TweenMax.to( $stepApply, 0.1, {opacity: 1, y: 0, ease:Linear.easeNone} );
	var tStep2 = 			new TweenMax.to( $stepApprove, 0.1, {opacity: 1, y: 0, ease:Linear.easeNone} );
	var tStep3 = 			new TweenMax.to( $stepFund, 0.1, {opacity: 1, y: 0, ease:Linear.easeNone} );




	var sTitle = 			new ScrollScene({triggerElement: ".section-one", duration: 200, offset: 200, triggerHook: 1})
								.setTween(tTitle).addTo(controller);
	var sCoins = 			new ScrollScene({triggerElement: ".intro-benefits", duration: 1300, tweenChanges: true, offset: 200, triggerHook: 1})
								.setTween(tCoins).addTo(controller);



	var sLineDash = new ScrollScene({triggerElement: ".intro-benefits-content-list-item:nth-child(2)", duration: 600, tweenChanges: true, offset: 100, triggerHook: 1})
								.setTween(tLineDash).addTo(controller);





	var sAdvertising = 		new ScrollScene({triggerElement: "#line-circ_1", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tAdvertising).addTo(controller);
	var sAdvertisingText = 	new ScrollScene({triggerElement: "#line-circ_1", duration: 200, tweenChanges: true, offset: 130, triggerHook: 1})
								.setTween(tAdvertisingText).addTo(controller);


	var sInventory = 		new ScrollScene({triggerElement: "#line-circ_2", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tInventory).addTo(controller);
	var sInventoryText = 	new ScrollScene({triggerElement: "#line-circ_2", duration: 200, tweenChanges: true, offset: 170, triggerHook: 1})
								.setTween(tInventoryText).addTo(controller);


	var sDebt = 			new ScrollScene({triggerElement: "#line-circ_3", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tDebt).addTo(controller);
	var sDebtText =			new ScrollScene({triggerElement: "#line-circ_3", duration: 200, tweenChanges: true, offset: 210, triggerHook: 1})
								.setTween(tDebtText).addTo(controller);


	var sCashflow = 		new ScrollScene({triggerElement: "#line-circ_4", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tCashflow).addTo(controller);
	var sCashflowText = 	new ScrollScene({triggerElement: "#line-circ_4", duration: 200, tweenChanges: true, offset: 250, triggerHook: 1})
								.setTween(tCashflowText).addTo(controller);


	var sExpand = 			new ScrollScene({triggerElement: "#line-circ_5", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tExpand).addTo(controller);
	var sExpandText = 		new ScrollScene({triggerElement: "#line-circ_5", duration: 200, tweenChanges: true, offset: 290, triggerHook: 1})
								.setTween(tExpandText).addTo(controller);


	var sImprove = 			new ScrollScene({triggerElement: "#line-circ_6", duration: 200, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tImprove).addTo(controller);
	var sImproveText = 		new ScrollScene({triggerElement: "#line-circ_6", duration: 200, tweenChanges: true, offset: 330, triggerHook: 1})
								.setTween(tImproveText).addTo(controller);





	var sTeamAccount = 		new ScrollScene({triggerElement: ".svg-account", duration: 800, tweenChanges: true, offset: 50, triggerHook: 1})
								.setTween(tTeamAccount).addTo(controller);

	var sTeamWriter = 		new ScrollScene({triggerElement: ".svg-underwriter", duration: 2400, tweenChanges: true, offset: 150, triggerHook: 1})
								.setTween(tTeamWriter).addTo(controller);




	var sStep1 = 			new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 300, triggerHook: 1})
								.setTween(tStep1).addTo(controller);

	var sStep2 = 			new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 500, triggerHook: 1})
								.setTween(tStep2).addTo(controller);

	var sStep3 = 			new ScrollScene({triggerElement: ".steps", duration: 100, tweenChanges: true, offset: 700, triggerHook: 1})
								.setTween(tStep3).addTo(controller);


/* ========================================================================== */






function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength)
		   .css("stroke-dashoffset", lineLength);
	}
















