//add chip
document.getElementById("jsAddChip").addEventListener("click", () => {
	const modal = document.getElementById("jsAddUserModal");
	const input = document.getElementById("jsChipInput");
	const text = input.value.trim();

	if (text) {
		const chip = document.createElement("div");
		chip.className = "chip";
		chip.innerHTML = `
            <span class="chip-text">${text}</span>
            <button class="chip-close">&times;</button>
        `;
		document.getElementById("jsChipsContainer").appendChild(chip);
		input.value = "";
		modal.style.display = "none";

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
