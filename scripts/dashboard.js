function showFilterOptions(c) {
  const val = document.getElementById(c);
  activeComponentChecker(val);

  val.classList.toggle("hidden");
  val.classList.toggle("z-10");
}
const user = document.getElementById("add-user");
const tooltip = document.querySelectorAll(".tooltipDiv");
function toggleAddUser() {
  activeComponentChecker(null);
  user.classList.toggle("hidden");
}
tooltip.forEach((e) => {
  e.addEventListener("click", (y) => {
    e.classList.toggle("active");
    e.classList.toggle("hidden");
  });
});
function openTableMenuD(element) {
  activeComponentChecker(null);
  tooltip.forEach((e) => {
    // console.log(element.parentElement.children[1]);
    if (
      e.classList.contains("active") &&
      e != element.parentElement.children[0]
    ) {
      e.classList.toggle("hidden");
      e.classList.toggle("active");
    }
  });

  element.parentElement.children[0].classList.toggle("hidden");
  element.parentElement.children[0].classList.toggle("active");
  // console.log(element.parentElement.children[0]);
}
function toggleDropdown2(e) {
  const element = document.getElementById("handleClick");
  activeComponentChecker(element);
  element.classList.toggle("hidden");
}
function showFilterDropDown(id) {
  // activeComponentChecker();
  document.getElementById(id).classList.toggle("hidden");
  // document.getElementById(id).classList.toggle("z-10");
  document.querySelectorAll(`#${id} a`).forEach((a) => {
    a.style.cursor = "pointer";
    a.style.display = "block";

    a.addEventListener("click", function (e) {
      console.log(e.target.textContent);
      document.getElementById("setfilterText1").innerText =
        e.target.textContent;
      document.getElementById(id).classList.add("hidden");
    });
  });
}

function membersbtn() {
  const el = document.querySelector("#members-interaction");
  activeComponentChecker(el);
  // event.stopPropagation();

  el.classList.toggle("hidden");
}
//
document
  .querySelector("body")
  .addEventListener("click", activeComponentChecker);
//
function activeComponentChecker(el) {
  tooltip.forEach((e) => {
    // console.log(element.parentElement.children[1]);
    if (e.classList.contains("active")) {
      e.classList.add("hidden");
      e.classList.remove("active");
    }
  });
  const el1 = document.getElementById("handleClick");
  const el2 = document.getElementById("handleClick1");
  const el3 = document.getElementById("dropdown");
  const el4 = document.getElementById("members-interaction");
  const el5 = document.getElementById("overview-interaction");

  if (el1 && el1 != el) {
    if (!el1.classList.contains("hidden")) {
      el1.classList.toggle("hidden");
      el1.classList.toggle("z-10");
      console.log("function call el1");
    }
  }
  if (el2 && el2 != el) {
    if (!el2.classList.contains("hidden")) {
      el2.classList.toggle("hidden");
      el2.classList.toggle("z-10");
      console.log("function call el2");
    }
  }
  if (el3 && el3 != el) {
    if (!el3.classList.contains("hidden")) {
      el3.classList.toggle("hidden");
    }
  }
  if (el4 && el4 != el) {
    // console.log("function call el4");
    if (!el4.classList.contains("hidden")) {
      el4.classList.toggle("hidden");
      console.log("function call el4");
    }
  }
  if (el5 && el5 != el) {
    // console.log("function call el4");
    if (!el5.classList.contains("hidden")) {
      el5.classList.toggle("hidden");
      console.log("function call el5");
    }
  }
}
