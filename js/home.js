// @codekit-prepend '_plugins/TweenMax.min.js'

// @codekit-prepend '_plugins/ScrollMagic.min.js'

// @codekit-prepend '_plugins/scrollmagic-plugins/animation.gsap.min.js'




// @codekit-append '_parts-home/home-hero_height.js'

// @codekit-append '_parts-home/home-stories.js'

// @codekit-append '_parts-form/form.js'



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

		$teamAccount = $$('#team-phone path'),
		$teamWriter = $$('#team-pencil path'),

		$stepApply = $(".how-steps-list-item").eq(0),
		$stepApprove = $(".how-steps-list-item").eq(1),
		$stepFund = $(".how-steps-list-item").eq(2)
		;



	pathPrepare($teamAccount);
	pathPrepare($teamWriter);
	pathPrepare($lineDash);



	var controller = new ScrollMagic.Controller();
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

	var tTeamAccount = 		new TweenMax.to( $teamAccount, 1, {strokeDashoffset: 0, ease:Linear.easeNone} );
	var tTeamWriter = 		new TweenMax.to( $teamWriter, 1, {strokeDashoffset: 0, ease:Linear.easeNone} );

	var tStep1 = 			new TweenMax.to( $stepApply, 1, {opacity: 1, y: 0, ease:Linear.easeNone} );
	var tStep2 = 			new TweenMax.to( $stepApprove, 1, {opacity: 1, y: 0, ease:Linear.easeNone} );
	var tStep3 = 			new TweenMax.to( $stepFund, 1, {opacity: 1, y: 0, ease:Linear.easeNone} );




	var sTitle = 			new ScrollMagic.Scene({triggerElement: ".section-one", duration: 200, offset: 200, triggerHook: 1})
								.setTween(tTitle).addTo(controller);
	var sCoins = 			new ScrollMagic.Scene({triggerElement: ".intro-benefits", duration: 1300, tweenChanges: true, offset: 200, triggerHook: 1})
								.setTween(tCoins).addTo(controller);



	var sLineDash = 		new ScrollMagic.Scene({triggerElement: ".intro-benefits-content-list-item:nth-child(2)", duration: 600, tweenChanges: true, offset: 100, triggerHook: 1})
								.setTween(tLineDash).addTo(controller);





	var sAdvertising = 		new ScrollMagic.Scene({triggerElement: "#line-circ_1", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tAdvertising).addTo(controller);
	var sAdvertisingText = 	new ScrollMagic.Scene({triggerElement: "#line-circ_1", duration: 200, tweenChanges: true, offset: 130, triggerHook: 1})
								.setTween(tAdvertisingText).addTo(controller);


	var sInventory = 		new ScrollMagic.Scene({triggerElement: "#line-circ_2", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tInventory).addTo(controller);
	var sInventoryText = 	new ScrollMagic.Scene({triggerElement: "#line-circ_2", duration: 200, tweenChanges: true, offset: 170, triggerHook: 1})
								.setTween(tInventoryText).addTo(controller);


	var sDebt = 			new ScrollMagic.Scene({triggerElement: "#line-circ_3", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tDebt).addTo(controller);
	var sDebtText =			new ScrollMagic.Scene({triggerElement: "#line-circ_3", duration: 200, tweenChanges: true, offset: 210, triggerHook: 1})
								.setTween(tDebtText).addTo(controller);


	var sCashflow = 		new ScrollMagic.Scene({triggerElement: "#line-circ_4", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tCashflow).addTo(controller);
	var sCashflowText = 	new ScrollMagic.Scene({triggerElement: "#line-circ_4", duration: 200, tweenChanges: true, offset: 250, triggerHook: 1})
								.setTween(tCashflowText).addTo(controller);


	var sExpand = 			new ScrollMagic.Scene({triggerElement: "#line-circ_5", duration: 600, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tExpand).addTo(controller);
	var sExpandText = 		new ScrollMagic.Scene({triggerElement: "#line-circ_5", duration: 200, tweenChanges: true, offset: 290, triggerHook: 1})
								.setTween(tExpandText).addTo(controller);


	var sImprove = 			new ScrollMagic.Scene({triggerElement: "#line-circ_6", duration: 200, tweenChanges: true, offset: 125, triggerHook: 1})
								.setTween(tImprove).addTo(controller);
	var sImproveText = 		new ScrollMagic.Scene({triggerElement: "#line-circ_6", duration: 200, tweenChanges: true, offset: 330, triggerHook: 1})
								.setTween(tImproveText).addTo(controller);





	var sTeamAccount = 		new ScrollMagic.Scene({triggerElement: ".team-member.account", duration: 800, offset: 50, triggerHook: 1})
								.setTween(tTeamAccount).addTo(controller);

	var sTeamWriter = 		new ScrollMagic.Scene({triggerElement: ".team-member.underwriter", duration: 2400, offset: 150, triggerHook: 1})
								.setTween(tTeamWriter).addTo(controller);




	var sStep1 = 			new ScrollMagic.Scene({triggerElement: ".how-steps-list", duration: 100, offset: 300, triggerHook: 1})
								.setTween(tStep1).addTo(controller);

	var sStep2 = 			new ScrollMagic.Scene({triggerElement: ".how-steps-list", duration: 100, offset: 500, triggerHook: 1})
								.setTween(tStep2).addTo(controller);

	var sStep3 = 			new ScrollMagic.Scene({triggerElement: ".how-steps-list", duration: 100, offset: 700, triggerHook: 1})
								.setTween(tStep3).addTo(controller);


/* ========================================================================== */






function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength)
		   .css("stroke-dashoffset", lineLength);
	}