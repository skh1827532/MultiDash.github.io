function showQuickLinks(c) {
  const val = document.getElementById(c);
  activeComponentChecker(val);

  val.classList.toggle("hidden");
  val.classList.toggle("z-10");
}
document
  .querySelector("body")
  .addEventListener("click", activeComponentChecker);
function activeComponentChecker(el) {
  const el1 = document.getElementById("handleClick");

  if (el1 && el1 != el) {
    if (!el1.classList.contains("hidden")) {
      el1.classList.toggle("hidden");
      el1.classList.toggle("z-10");
      console.log("function call el1");
    }
  }
}
