$(function(){
	// Navigation
	$(".nav > ul > li").hover(
		function(){
			$(".nav").addClass("active");
			$(this).addClass("active");
		},
		function(){
			$(".nav").removeClass("active");
			$(this).removeClass("active");
		}
	);
	$(".nav > ul > li > a").focusin(function(){
		$(".nav").addClass("active");
		$(this).parent().addClass("active");
	});
	$(".nav li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});
	$(".nav li:last-child li:last-child").focusout(function(){
		$(".nav").removeClass("active");
	});

	// Gallery
	var w;

	$(window).resize(function(){
		w=$(window).width();
	});
	$(window).trigger("resize");

	var amount=0;
	var id=setInterval(rightMoving, 5000);

	$(".left").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	$(".right").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	$(".left, .right").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 5000);
		}
	);
	function leftMoving(){
		if($(".key_moving").is(":animated")) return;

		$(".key_moving ul").prepend($(".key_moving li:last-child"));
		amount-=w;
		$(".key_moving").css({left:amount});
		amount+=w;
		$(".key_moving").animate({left:amount}, 500);
	}
	function rightMoving(){
		if($(".key_moving").is(":animated")) return;

		amount-=w;
		$(".key_moving").animate({left:amount}, 500, function(){
			$(".key_moving ul").append($(".key_moving li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	}

	// Cookie Popup
	$(".upper_banner .close").click(function(){
		$(".upper_banner").slideUp(300);
	});
});