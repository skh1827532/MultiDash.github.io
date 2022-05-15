function showOptions(e) {
	const options = document.getElementById("search-interaction");
	options.classList.toggle("hidden");
	e.children[0].classList.toggle("rotate-180");
}

const amount = document.getElementById("amount");

function increment() {
	amount.value++;
}

function decrement() {
	if (amount.value > 0) {
		amount.value--;
	}
}
