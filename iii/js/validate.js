var validateField = function (fieldElem, infoMessage, validateFn) {
	$(fieldElem).after("<span>" + infoMessage + "</span>");
	$(fieldElem).next().hide();

	$("#username").blur(function () {
		var data = $("#username").val();
		if (!validate_userid(data)) {
			$("#username").next().hide();
			$("#username").next().addClass("error");
			$("#username").next().removeClass("ok");
			$("#username").next().removeClass("info");
			$("#username").next().text("error");
			$("#username").next().show();
		} else {
			$("#username").next().hide();
			$("#username").next().addClass("ok");
			$("#username").next().removeClass("error");
			$("#username").next().removeClass("info");
			$("#username").next().text("ok");
			$("#username").next().show();
		}

	});

	$("#username").keypress(function () {
		$("#username").next().hide();
		$("#username").next().addClass("info");
		$("#username").next().removeClass("error");
		$("#username").next().removeClass("ok");
		$("#username").next().text("uslov(a-z, 0-9, A-Z) min 6 char");
		$("#username").next().show();

	});

	$("#email").blur(function () {
		var data = $("#email").val();
		if (!valid_email(data)) {
			$("#email").next().hide();
			$("#email").next().addClass("error");
			$("#email").next().removeClass("ok");
			$("#email").next().removeClass("info");
			$("#email").next().text("error");
			$("#email").next().show();
		} else {
			$("#email").next().hide();
			$("#email").next().addClass("ok");
			$("#email").next().removeClass("error");
			$("#email").next().removeClass("info");
			$("#email").next().text("ok");
			$("#email").next().show();
		}
	});

	$("#email").keypress(function () {
		$("#email").next().hide();
		$("#email").next().addClass("info");
		$("#email").next().removeClass("error");
		$("#email").next().removeClass("ok");
		$("#email").next().text("someone@example.comemail");
		$("#email").next().show();
	});

	$("#password").blur(function () {
		var data = $("#password").val();
		if (!validate_password(data)) {
			$("#password").next().hide();
			$("#password").next().addClass("error");
			$("#password").next().removeClass("ok");
			$("#password").next().removeClass("info");
			$("#password").next().text("error");
			$("#password").next().show();
		} else {
			$("#password").next().hide();
			$("#password").next().addClass("ok");
			$("#password").next().removeClass("error");
			$("#password").next().removeClass("info");
			$("#password").next().text("ok");
			$("#password").next().show();
		}
	});

	$("#password").keypress(function () {
		$("#password").next().hide();
		$("#password").next().addClass("info");
		$("#password").next().removeClass("error");
		$("#password").next().removeClass("ok");
		$("#password").next().text("min (8 char, 1 Uppercase, 1 symbol #$%, 1 number)");
		$("#password").next().show();
	});

	function valid_email(email) {
		var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
		return pattern.test(email);
	}

	function validate_userid(uid) {
		var pattern = new RegExp(/^[a-zA-Z0-9]{6,}$/);
		return pattern.test(uid);
	}

	function validate_password(pass) {
		var pattern = new RegExp((/^(?=.*\d)(?=.*[a-z])(?=.*[#%$])(?=.*[A-Z])[0-9a-zA-Z#%$]{8,}$/));
		return pattern.test(pass);
	}
};
$(document).ready(function () {
	validateField("input");
});