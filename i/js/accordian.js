var createAccordian = function (accordianElem) {
	$.each($(accordianElem), function (index, value) {
		$(value).next().hide();
		$(value).click(function () {
			$(this).next().slideToggle("slow", function () {});
		});
	});
};

$(document).ready(function () {
	createAccordian("a");
});