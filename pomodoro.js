$(document).ready(function(){
	var time = $('#clockLength').val();
	var breakTime = $('#breakLength').val();



	$("#start").click(function(){
		countdown(time);

		console.log(time + "is the time")
	});

	$("#addSession").click(function(){
		time++;
		$('#clockLength').val(time);
	});

	$("#subtractSession").click(function(){
		time--;
		$('#clockLength').val(time);
	});

	$("#addBreak").click(function(){
		breakTime++;
		$('#breakLength').val(breakTime);
	});

	$("#subtractBreak").click(function(){
		breakTime--;
		$('#breakLength').val(breakTime);
	});

	function countdown(){
		
	};


});