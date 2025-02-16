const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const cancelPopupButton = document.getElementById("cancelPopup");
const popup = document.getElementById("addUserPopup");

openPopupButton.addEventListener("click", () => {
	popup.style.display = "flex";
});

closePopupButton.addEventListener("click", () => {
	popup.style.display = "none";
});

cancelPopupButton.addEventListener("click", () => {
	popup.style.display = "none";
});

window.addEventListener("click", (event) => {
	if (event.target === popup) {
		popup.style.display = "none";
	}
});
