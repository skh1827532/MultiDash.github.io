//  const val = document.querySelectorAll(".order-checkbox").some((checkbox) => {
//     return checkbox.checked = true;
// })

document.querySelectorAll(".order-checkbox").forEach(function (checkbox) {
	checkbox.addEventListener("change", function (event) {
		if (checkbox.checked === true) {
			document.querySelector(".interaction-container").style.display = "flex";
			document.querySelector(".amount-1").textContent = "250.00";
			return;
		}
		document.querySelector(".interaction-container").style.display = "none";
		document.querySelector(".amount-1").textContent = "0.00";
	});
});
