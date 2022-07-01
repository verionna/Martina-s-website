const instance = basicScroll.create({
	elem: document.querySelector(".home-slide"),
	from: "middle-middle",
	to: "bottom-top",
	props: {
		"--home-title-opacity": {
			from: 1,
			to: 0,
		},
	},
});

instance.start();