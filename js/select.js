document.querySelectorAll(".select").forEach((select) => {
	const trigger = select.querySelector(".select-trigger");
	const options = select.querySelectorAll(".option");
	const placeholder = select.querySelector(".select-placeholder");

	trigger.addEventListener("click", () => {
		select.classList.toggle("is-open");
	});
	options.forEach((option) => {
		option.addEventListener("click", () => {
			options.forEach((opt) => opt.classList.remove("selected"));
			option.classList.add("selected");
			placeholder.textContent = option.textContent;
			select.classList.remove("is-open");
		});
	});

	document.addEventListener("click", (e) => {
		if (!select.contains(e.target)) {
			select.classList.remove("is-open");
		}
	});
});
