const burger = document.getElementById("jsBurger");
const navLinks = document.getElementById("jsNavigationLinks");

burger.addEventListener("click", () => {
	const expanded = burger.getAttribute("aria-expanded") === "true" || false;
	burger.setAttribute("aria-expanded", !expanded);
	navLinks.classList.toggle("is-active");
});
