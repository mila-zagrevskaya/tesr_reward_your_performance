const openModalButton = document.getElementById("jsOpenModal");
const closeModalButton = document.getElementById("jsCloseModal");
const cancelModalButton = document.getElementById("jsCancelModal");
const modal = document.getElementById("jsAddUserModal");

openModalButton.addEventListener("click", () => {
	modal.style.display = "flex";
});

closeModalButton.addEventListener("click", () => {
	modal.style.display = "none";
});

cancelModalButton.addEventListener("click", () => {
	modal.style.display = "none";
});

window.addEventListener("click", (event) => {
	if (event.target === modal) {
		modal.style.display = "none";
	}
});
