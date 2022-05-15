const allCheckBox = document.querySelectorAll(".checkbox");
const allSvgTicks = document.querySelectorAll(".svgTick");
allCheckBox.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("bg-blue-100");
    e.classList.toggle("bg-blue-700");
    e.nextElementSibling.classList.toggle("-z-10");
    console.log("in single");
  });
});
allSvgTicks.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("-z-10");
    e.previousElementSibling.classList.toggle("bg-blue-100");
    e.previousElementSibling.classList.toggle("bg-blue-700");
    e.previousElementSibling.checked = false;
  });
});
