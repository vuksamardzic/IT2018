var createSlideshow = function (slideshowElem, duration) {
	setTimeout(function () {
		$(slideshowElem).fadeIn(1500);
	}, duration);

	setTimeout(function () {
		$(slideshowElem).fadeOut(1500);
	}, duration + 5000);
};

$(document).ready(function () {
	$(".slideshow").children().hide();

	createSlideshow("img:eq(0)", 0);
	createSlideshow("img:eq(1)", 6500);
	createSlideshow("img:eq(2)", 13000);
	createSlideshow("img:eq(3)", 19500);
	createSlideshow("img:eq(4)", 26000);

	setInterval(function () {
		createSlideshow("img:eq(0)", 0);
		createSlideshow("img:eq(1)", 6500);
		createSlideshow("img:eq(2)", 13000);
		createSlideshow("img:eq(3)", 19500);
		createSlideshow("img:eq(4)", 26000);
	}, 32500);
});