$(document).ready(function(){

	var numOfClicks = 0;

	$(".clicks").on('click', function(){
		numOfClicks++;

		$(".showNumClicks").children().remove();

		$(".showNumClicks").append('<p>Here are the number of clicks: ' + numOfClicks + '</p>');
		$(".showNewButtons").show();
		$(".buttonClicks").css("background-color", "#00FF00");
	});
	$(".colorChange").on('click', function(){
		$(".buttonClicks").css("background-color", "#FF0000");

	});
	$(".removeColor").on('click', function(){
		$(".showNewButtons").remove();
	});
});
