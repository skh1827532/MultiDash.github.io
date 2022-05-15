/* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */

//   Script for Countries DropDown
function myFunction() {
  const arrow = document.querySelector(".arrow");
  const down = document.getElementById("myDropdown");
  document.querySelectorAll(".dropdown-content").forEach((el) => {
    el.classList.add("active2");
  });
  document.getElementById("myDropdown").classList.remove("active2");
  if (!down.classList.contains("active2")) {
    down.classList.toggle("hidden");
  }
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const options = document.querySelectorAll("#myDropdown a");
options.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    options.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".dropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myFunction();
  });
});

//   Script for Countries 2 DropDown
function myFunction2() {
  const arrow = document.querySelector(".arrow2");
  const down = document.getElementById("myDropdown2");
  document.getElementById("myDropdown2").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const options2 = document.querySelectorAll("#myDropdown2 a");
options2.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    options2.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".dropbtnspan2").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myFunction2();
  });
});
//script for cities
function myCities() {
  const arrow = document.querySelector(".city-arrow");
  const down = document.getElementById("cityDropdown");
  document.getElementById("cityDropdown").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

function filterCities() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("cityInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("cityDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const cityoptions = document.querySelectorAll("#cityDropdown a");
cityoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    cityoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".citydropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myCities();
  });
});

//script for cities2
function myCities2() {
  const arrow = document.querySelector(".city-arrow2");
  const down = document.getElementById("cityDropdown2");
  document.getElementById("cityDropdown2").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

function filterCities2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("cityInput2");
  filter = input.value.toUpperCase();
  div = document.getElementById("cityDropdown2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const cityoptions2 = document.querySelectorAll("#cityDropdown2 a");
cityoptions2.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    cityoptions2.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".citydropbtnspan2").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myCities2();
  });
});
//script for states
function myStates() {
  const arrow = document.querySelector(".states-arrow");
  const down = document.getElementById("stateDropdown");
  document.querySelectorAll(".dropdown-content").forEach((el) => {
    el.classList.add("active2");
  });
  down.classList.remove("active2");
  if (!down.classList.contains("active2")) {
    down.classList.toggle("hidden");
  }
  // document.getElementById("stateDropdown").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}
//Dropdwon
function showDropDownMenu(el) {
  el.parentElement.children[1].classList.toggle("hidden");
  // getElementsById("drop-down-div").classList.toggle("hidden");
}

function filterStates() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("stateInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("stateDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const stateoptions = document.querySelectorAll("#stateDropdown a");
stateoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    stateoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".statedropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myStates();
  });
});

//script for Languages
function myLang() {
  const arrow = document.querySelector(".lang-arrow");
  const down = document.getElementById("langDropdown");
  document.querySelectorAll(".dropdown-content").forEach((el) => {
    el.classList.add("active2");
  });
  down.classList.remove("active2");
  if (!down.classList.contains("active2")) {
    down.classList.toggle("hidden");
  }
  // document.getElementById("langDropdown").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

function filterLang() {
  console.log("filterLang");
  var input, filter, ul, li, a, i;
  input = document.getElementById("langInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("langDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

const langoptions = document.querySelectorAll("#langDropdown a");
langoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    langoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".langdropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myLang();
  });
});
//script for Length
function myLen() {
  const arrow = document.querySelector(".len-arrow");
  const down = document.getElementById("lenDropdown");
  document.getElementById("lenDropdown").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

const lenoptions = document.querySelectorAll("#lenDropdown a");
lenoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    lenoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".lendropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myLen();
  });
});

//script for Weight
function myWeight() {
  const arrow = document.querySelector(".weight-arrow");
  const down = document.getElementById("weightDropdown");
  document.querySelectorAll(".tempdropbtn").forEach((el) => {
    el.classList.add("active2");
  });
  down.classList.remove("active2");
  if (!down.classList.contains("active2")) {
    down.classList.toggle("hidden");
  }

  if (!down.classList.contains("hidden")) {
    arrow.classList.add("rotate-180");
  } else {
    arrow.classList.remove("rotate-180");
  }
}

const weightoptions = document.querySelectorAll("#weightDropdown a");
weightoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    weightoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".weightdropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myWeight();
  });
});

//script for Weight
function myTemp() {
  const arrow = document.querySelector(".tempdropbtnspan");
  const down = document.getElementById("tempDropdown");
  document.querySelectorAll(".tempdropbtn").forEach((el) => {
    el.classList.add("active2");
  });
  down.classList.remove("active2");
  if (!down.classList.contains("active2")) {
    down.classList.toggle("hidden");
  }

  // document.getElementById("tempDropdown").classList.toggle("hidden");
  if (!down.classList.contains("hidden")) {
    arrow.nextElementSibling.classList.add("rotate-180");
  } else {
    arrow.nextElementSibling.classList.remove("rotate-180");
  }
}

const tempoptions = document.querySelectorAll("#tempDropdown a");
tempoptions.forEach((item) => {
  item.classList.add("text-slate-600");
  item.addEventListener("click", () => {
    tempoptions.forEach((inner) => {
      inner.classList.remove("text-blue-700", "font-medium", "bg-blue-50");
    });
    document.querySelector(".tempdropbtnspan").textContent = item.textContent;
    item.classList.remove("text-slate-600");
    item.classList.add("bg-blue-50", "text-blue-700", "font-medium");
    myTemp();
  });
});

function swaptext(el) {
  const targetText = el.innerText;
  document.getElementById("drop-down-content-setter").innerText = targetText;

  document.getElementById("drop-down-div").classList.add("hidden");
}
function swaptext2(el) {
  const targetText = el.innerText;
  document.getElementById("drop-down-content-setter2").innerText = targetText;

  document.getElementById("drop-down-div2").classList.add("hidden");
}
function swaptext3(el) {
  const targetText = el.innerText;
  document.querySelector(".settextofdropdown").innerText = targetText;

  document.getElementById("drop-down-div3").classList.add("hidden");
}
