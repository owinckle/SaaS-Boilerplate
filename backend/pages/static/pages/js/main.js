// const sections = $("section");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-container nav ul li a");
const features = document.querySelectorAll(".feature");
const featureLinks = document.querySelectorAll("#features .nav ul li");

$(window).scroll(() => {
	if ($(window).scrollTop() >= 130) {
		$("body").addClass("scroll");
	} else {
		$("body").removeClass("scroll");
	}

	let currentSection = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if ($(window).scrollTop() >= sectionTop) {
			if (section.getAttribute("id")) {
				currentSection = section.getAttribute("id");
			}
		}
	});

	navItems.forEach((item) => {
		const section = item.getAttribute("data-section");
		if (section == currentSection) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});

	let currentFeature = "";
	features.forEach((feature) => {
		const featureTop = feature.offsetTop;
		const feauteNavTop = document.querySelector("#features .nav").offsetTop + 120;
		if (feauteNavTop >= featureTop) {
			currentFeature = feature.getAttribute("id");
		}
	});

	featureLinks.forEach((item) => {
		const link = item.firstElementChild.getAttribute("href").replace("#", "");
		if (link == currentFeature) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});
});
