// const sections = $("section");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-container nav ul li a");

$(window).scroll(() => {
	if ($(window).scrollTop() >= 130) {
		$("body").addClass("scroll");
	} else {
		$("body").removeClass("scroll");
	}

	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if ($(window).scrollTop() >= sectionTop) {
			current = section.getAttribute("id");
		}
	});

	navItems.forEach((item) => {
		const section = item.getAttribute("data-section");
		if (section == current) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});
});
