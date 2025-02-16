//add chip
document.getElementById("addChip").addEventListener("click", () => {
	const popup = document.getElementById("addUserPopup");
	const input = document.getElementById("chipInput");
	const text = input.value.trim();

	if (text) {
		const chip = document.createElement("div");
		chip.className = "chip";
		chip.innerHTML = `
            <span class="chip-text">${text}</span>
            <button class="chip-close">&times;</button>
        `;
		document.getElementById("chipsContainer").appendChild(chip);
		input.value = "";
		popup.style.display = "none";

		chip.querySelector(".chip-close").addEventListener("click", () => {
			chip.remove();
		});
	}
});

//remove chip
document.querySelectorAll(".chip-close").forEach((button) => {
	button.addEventListener("click", () => {
		const chip = button.closest(".chip");
		chip.remove();
	});
});
