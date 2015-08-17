$(document).ready(function() {
	console.log("Script included!");

	$("#togglePics").click(function() {
		if ($(this).text() == "Hide Pictures") {
			$(this).text("Show Pictures");
			$("img").hide();
		}
		else {
			$(this).text("Hide Pictures");
			$("img").show();
		}
	});

	if (!$(".ing-list").hasClass("strike2")) {
		$(".ing-list").mouseenter(function() {
			$(this).addClass("strike1");
		});
		$(".ing-list").mouseleave(function() {
			$(this).removeClass("strike1");
		});
	};

	$(".ing-list").click(function() {
		$(this).toggleClass("strike2");
	});

	$("p").hover(function() {
		$(this).toggleClass("highlighted");
	});
});