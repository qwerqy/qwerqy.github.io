$(window).on('load', function() {
	$(".se-pre-con").fadeOut("slow");
});
$(document).ready(function(){

	$('#navBar').hide();

	$('#bwToggle').on('click', function(){
		$(".se-pre-con").fadeIn("slow");

		setTimeout(function(){
			$("#cover").toggleClass('bg-dark bg-light');
			$("#bwToggle").toggleClass('btn-outline-light btn-outline-dark ');
		}, 500);

		$(".se-pre-con").fadeOut("slow");
	});

	$("#navArrow").click(function(){
		$('html, body').animate({
			scrollTop: $("#work").offset().top
		}, 1000);
	});

	var inview = new Waypoint.Inview({
		element: $('#work')[0],
		exit: function(direction) {
			$('#navBar').slideDown();
			$("#navArrow").fadeOut();
		},
		// entered: function(direction) {
		// 	$('#navBar').slideUp();
		// 	$("#navArrow").fadeIn(1000);
		// }
	});

	$('.sellDome-fade').hide();
	$('.notQuora-fade').hide();

	$('#sellDome').on('mouseover',function(){
		$('.sellDome-fade').fadeIn();
	}).on('mouseleave', function(){
		$('.sellDome-fade').fadeOut();
	});

	$('#notQuora').on('mouseover',function(){
		$('.notQuora-fade').fadeIn();
	}).on('mouseleave', function(){
		$('.notQuora-fade').fadeOut();
	});
});
