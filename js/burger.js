const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
	const expanded = burger.getAttribute("aria-expanded") === "true" || false;
	burger.setAttribute("aria-expanded", !expanded);
	navLinks.classList.toggle("is-active");
});
