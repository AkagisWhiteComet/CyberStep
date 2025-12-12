const buttonMoveUp = document.getElementById("top-button");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 600) {
		buttonMoveUp.style.opacity = 1;
		buttonMoveUp.disabled = false;
	} else {
		buttonMoveUp.style.opacity = 0;
		buttonMoveUp.disabled = true;
	}
});

buttonMoveUp.addEventListener("click", () => {
	window.scrollTo(0, 0);
});