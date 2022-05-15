document
  .querySelector("body")
  .addEventListener("click", activeComponentChecker);
function activeComponentChecker(el) {
  const el1 = document.querySelector(".catalogueDropDown");
  const tableMore = document.querySelectorAll(".tableSvgInt");
  if (el1 && el1 != el) {
    if (!el1.classList.contains("hidden")) {
      el1.classList.toggle("hidden");
      el1.classList.toggle("z-10");
      console.log("function call el1");
    }
  }
  tableMore.forEach((e) => {
    if (e.classList.contains("active") && e != el) {
      e.classList.toggle("hidden");
      e.classList.toggle("active");
    }
  });
}
const tableMore = document.querySelectorAll(".tableSvgInt");
tableMore.forEach((e) => {
  e.addEventListener("click", (y) => {
    console.log(e);
    e.classList.toggle("hidden");
    e.classList.toggle("active");
  });
});
function tableInteraction(el) {
  tableMore.forEach((e) => {
    if (e.classList.contains("active") && e != el.parentElement.children[1]) {
      e.classList.toggle("active");
      e.classList.toggle("hidden");
    }
  });
  activeComponentChecker(el);
  el.parentElement.children[1].classList.toggle("hidden");
  el.parentElement.children[1].classList.toggle("active");
}
//Status Drop down
function showDropDownMenu(el) {
  const element = document.querySelector(`.${el}`);
  activeComponentChecker(element);
  element.classList.toggle("hidden");
}
function swaptext3(el) {
  const targetText = el.innerText;
  document.querySelector(".settextofdropdown").innerText = targetText;

  document.getElementById("drop-down-div3").classList.add("hidden");
}
function handleActionsInteraction(el) {
  console.log(el.parentElement.children[1]);
  tableMore.forEach((e) => {
    if (e.classList.contains("active") && e != el.parentElement.children[1]) {
      e.classList.toggle("active");
      e.classList.toggle("hidden");
    }
  });
  activeComponentChecker(el.parentElement.children[1]);
  el.parentElement.children[1].classList.toggle("hidden");
  el.parentElement.children[1].classList.toggle("active");
}
function showDropDownMenu1(el) {
  el.parentElement.children[1].classList.toggle("hidden");
}

function swaptext(el) {
  const targetText = el.innerText;
  document.getElementById("drop-down-content-setter").innerText = targetText;

  document.getElementById("drop-down-div").classList.add("hidden");
}
