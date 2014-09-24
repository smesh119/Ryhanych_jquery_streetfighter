$(document).ready(function() {
	function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
		{ "left":"300px"},
		500,
		function(){
			$(this).hide();
			$(this).css("left", "-212px");
		}
		);
		})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$(document.body).keydown(function (e) {
		if (e.which == 88) { 
			$(".ryu-ready").hide();
			$(".ryu-still").hide();
			$(".looking-cool").show();
		}
	})

	.keyup(function (e) {
		if (e.which == 88) { 
			$(".looking-cool").hide();
			$(".ryu-ready").show();
		}
	});

});