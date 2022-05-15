// Sub Nav Menus
const sub = document.querySelector(".sub-ecommerce");
function openSubEcommerce() {
  if (sub.classList.contains("h-0")) {
    sub.classList.remove("h-0");
    sub.classList.add("h-30");
    sub.classList.remove("opacity-0");
    sub.classList.remove("pt-[-20px]");
    sub.classList.add("pt-2");
    sub.classList.remove("pointer-events-none");
    sub.classList.remove("scale-y-0");
    sub.classList.add("scale-y-100");
    return;
  }
  sub.classList.add("pointer-events-none");
  sub.classList.remove("h-30");
  sub.classList.remove("pt-2");
  sub.classList.add("h-0");
  sub.classList.add("opacity-0");
  sub.classList.add("pt-[-20px]");
  sub.classList.remove("scale-y-100");
  sub.classList.add("scale-y-0");
}
//Sub project Management
const sub2 = document.querySelector(".sub-project-management");

function openSubProject() {
  if (sub2.classList.contains("h-0")) {
    sub2.classList.remove("h-0");
    sub2.classList.add("h-30");
    sub2.classList.remove("opacity-0");
    sub2.classList.remove("pt-[-20px]");
    sub2.classList.add("pt-2");
    sub2.classList.remove("pointer-events-none");
    sub2.classList.remove("scale-y-0");
    sub2.classList.add("scale-y-100");
    return;
  }
  sub2.classList.add("pointer-events-none");
  sub2.classList.remove("h-30");
  sub2.classList.remove("pt-2");
  sub2.classList.add("h-0");
  sub2.classList.add("opacity-0");
  sub2.classList.add("pt-[-20px]");
  sub2.classList.remove("scale-y-100");
  sub2.classList.add("scale-y-0");
}

const sub_catalogue = document.querySelector(".sub-catalogue");
function openSubCatalogue() {
  if (sub_catalogue.classList.contains("h-0")) {
    sub_catalogue.classList.remove("h-0");
    sub_catalogue.classList.add("h-30");
    sub_catalogue.classList.remove("opacity-0");
    sub_catalogue.classList.remove("pt-[-20px]");
    sub_catalogue.classList.add("pt-2");
    sub_catalogue.classList.remove("pointer-events-none");
    sub_catalogue.classList.remove("scale-y-0");
    sub_catalogue.classList.add("scale-y-100");

    return;
  }
  sub_catalogue.classList.remove("h-30");
  sub_catalogue.classList.remove("pt-2");
  sub_catalogue.classList.add("h-0");
  sub_catalogue.classList.add("opacity-0");
  sub_catalogue.classList.add("pt-[-20px]");
  sub_catalogue.classList.add("pointer-events-none");
  sub_catalogue.classList.remove("scale-y-100");
  sub_catalogue.classList.add("scale-y-0");
}

const sub_order = document.querySelector(".sub-order");
function openSubOrder() {
  if (sub_order.classList.contains("h-0")) {
    sub_order.classList.remove("h-0");
    sub_order.classList.add("h-30");
    sub_order.classList.remove("opacity-0");
    sub_order.classList.remove("pt-[-20px]");
    sub_order.classList.add("pt-2");
    sub_order.classList.remove("pointer-events-none");
    sub_order.classList.remove("scale-y-0");
    sub_order.classList.add("scale-y-100");
    return;
  }
  sub_order.classList.remove("h-30");
  sub_order.classList.remove("pt-2");
  sub_order.classList.add("h-0");
  sub_order.classList.add("opacity-0");
  sub_order.classList.add("pt-[-20px]");
  sub_order.classList.add("pointer-events-none");
  sub_order.classList.remove("scale-y-100");
  sub_order.classList.add("scale-y-0");
}

const sub_overview = document.querySelector(".sub-overview");
function openSubOverview() {
  if (sub_overview.classList.contains("h-0")) {
    sub_overview.classList.remove("h-0");
    sub_overview.classList.add("h-30");
    sub_overview.classList.remove("opacity-0");
    sub_overview.classList.remove("pt-[-20px]");
    sub_overview.classList.add("pt-2");
    sub_overview.classList.remove("pointer-events-none");
    sub_overview.classList.remove("scale-y-0");
    sub_overview.classList.add("scale-y-100");
    return;
  }
  sub_overview.classList.remove("h-30");
  sub_overview.classList.remove("pt-2");
  sub_overview.classList.add("h-0");
  sub_overview.classList.add("opacity-0");
  sub_overview.classList.add("pt-[-20px]");
  sub_overview.classList.add("pointer-events-none");
  sub_overview.classList.remove("scale-y-100");
  sub_overview.classList.add("scale-y-0");
}

const sub_customers = document.querySelector(".sub-customers");
function openSubCustomer() {
  if (sub_customers.classList.contains("h-0")) {
    sub_customers.classList.remove("h-0");
    sub_customers.classList.add("h-30");
    sub_customers.classList.remove("opacity-0");
    sub_customers.classList.remove("pt-[-20px]");
    sub_customers.classList.add("pt-2");
    sub_customers.classList.remove("pointer-events-none");
    sub_customers.classList.remove("scale-y-0");
    sub_customers.classList.add("scale-y-100");
    return;
  }
  sub_customers.classList.remove("h-30");
  sub_customers.classList.remove("pt-2");
  sub_customers.classList.add("h-0");
  sub_customers.classList.add("opacity-0");
  sub_customers.classList.add("pt-[-20px]");
  sub_customers.classList.add("pointer-events-none");
  sub_customers.classList.remove("scale-y-100");
  sub_customers.classList.add("scale-y-0");
}

// Open and close dropdown
function toggleDropdown(element) {
  // console.log();
  // element.classList.add("open-sub-menu");
  if (element.nextElementSibling.classList.contains("h-0")) {
    element.nextElementSibling.classList.remove("h-0");
    element.nextElementSibling.classList.add("pt-4");
    element.nextElementSibling.classList.add("h-[100%]");
    element.nextElementSibling.classList.remove("invisible");
    element.nextElementSibling.classList.remove("opacity-0");
    element.children[1].children[0].classList.add("rotate-180");

    return;
  }
  element.nextElementSibling.classList.add("invisible");
  element.nextElementSibling.classList.remove("pt-4");
  element.nextElementSibling.classList.add("h-0");
  element.nextElementSibling.classList.remove("h-[100%]");
  element.nextElementSibling.classList.add("opacity-100");
  element.children[1].children[0].classList.remove("rotate-180");
}

// Navigation
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".navigation-menu").classList.toggle("active");
});
document.querySelector(".close-nav").addEventListener("click", () => {
  document.querySelector(".navigation-menu").classList.toggle("active");
});

// Active link logic

const links = document.querySelectorAll(".dashboard-links");
links.forEach((link) => {
  if (link.attributes.href.value == location.pathname) {
    link.children[0].classList.remove("text-slate-600");
    link.children[0].classList.add("text-blue-700", "bg-blue-100");
    // console.log(
    // 	(link.children[0].children[0].attributes.fill.value = "#1D4ED8")
    // );
  }
});

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
	create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /* When an item is clicked, update the original select box,
		and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /* When the select box is clicked, close any other select boxes,
	and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x,
    y,
    i,
    xl,
    yl,
    arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i);
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

function moreoptionmodal(el) {
  document.querySelectorAll("#newMemberInteraction").forEach((elp)=>{
    elp.classList.add("hidden");
  })
  el.parentElement.children[1].classList.toggle("hidden");
}

// Header
function qs(e) {
  return document.querySelector(e);
}
function qsA(e) {
  return document.querySelectorAll(e);
}

// Nav Icons handler
const statChartBtn = qs(".statsChartBtn");
statChartBtn.addEventListener('click', (e) => {
  e.stopPropagation()
})
const statChart = qs(".statsComponent");
const statCrossBtn = qs(".statCrossBtn");
const allIcons = [
  {
    icon: qs(".avatarBtn"),
    component: qs(".avatarDropDown"),
  },
  {
    icon: qs(".notificationBtn"),
    component: qs(".notiDropDown"),
  },
  {
    icon: qs(".searchBtn"),
    component: qs(".searchDropDown"),
  },
];
allIcons.forEach((i) => {
  i.component.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  i.icon.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

const stats= qs('.statsComponent')
stats.addEventListener('click', (e) => {
  e.stopPropagation()
}
  
)

document.body.onclick = function (e) {
  if(stats.classList.contains('active')) {
    stats.classList.replace( 'active','translate-x-full')
  }
  allIcons.forEach((ic) => {
 
    if (ic.icon.classList.contains("active")) {
      ic.icon.classList.remove("active");
      ic.component.classList.replace("opacity-1", "opacity-0");
      ic.component.classList.remove("active");
    }
  });
};
statChartBtn.addEventListener("click", statsToggler);
statCrossBtn.addEventListener("click", statsToggler);
function statsToggler() {
  statChartBtn.classList.toggle("active");
  statChart.classList.toggle("active");
  if (statChart.classList.contains("active")) {
    allIcons.forEach((y) => {
      if (y.component.classList.contains("active")) {
        y.component.classList.remove("top-11");
        y.component.classList.add("top-9");
        y.component.classList.remove("opacity-1");
        y.component.classList.add("opacity-0");
        y.component.classList.remove("active");
        y.component.classList.remove("z-10");
      }
    });
    statChart.classList.remove("translate-x-full");
  } else {
    statChart.classList.add("translate-x-full");
  }
}

allIcons.forEach((e) => {
  e.icon.addEventListener("click", () => {
    allIcons.forEach((y) => {
      if (y.component.classList.contains("active") && y != e) {
        y.component.classList.remove("top-11");
        y.component.classList.add("top-9");
        y.component.classList.remove("opacity-1");
        y.component.classList.add("opacity-0");
        y.component.classList.remove("active");
        y.component.classList.remove("z-10");
      }
    });
    e.icon.classList.toggle("active");
    e.component.classList.toggle("active");

    if (e.component.classList.contains("active")) {
      e.component.classList.remove("opacity-0");
      e.component.classList.add("opacity-1");
      e.component.classList.remove("top-9");
      e.component.classList.add("top-11");
      e.component.classList.add("z-10");
    } else {
      e.component.classList.remove("top-11");
      e.component.classList.add("top-9");
      e.component.classList.remove("opacity-1");
      e.component.classList.add("opacity-0");
      e.component.classList.remove("z-10");
    }
  });
});
// Drop Downs handler with arrow
const allDropDowns = [
  {
    btn: qs(".subDropDownBtn"),
    dropDown: qs(".subDropDown"),
    arrow: qs(".subArrowIcon"),
  },
  {
    btn: qs(".langDropDownBtn"),
    dropDown: qs(".langDropDown"),
    arrow: qs(".langArrowIcon"),
  },
];

allDropDowns.forEach((e) => {
  if (e.btn.classList.contains("changeText")) {
    const btn = e.btn;
    const dropdown = e.dropDown;
    const arrow = e.arrow;
    const langs = document.querySelectorAll(".selectLang");
    langs.forEach((e) => {
      e.addEventListener("click", () => {
        btn.children[0].textContent = e.textContent;
        dropdown.style.maxHeight = null;
        arrow.classList.remove("rotate-90");
        // console.log(arrow);
      });
    });
  }
  e.btn.addEventListener("click", () => {
    e.dropDown.classList.toggle("active");
    if (e.dropDown.classList.contains("active")) {
      e.arrow.classList.add("rotate-90");
      if (e.dropDown.style.maxHeight) {
        e.dropDown.style.maxHeight = null;
      } else {
        e.dropDown.style.maxHeight = e.dropDown.scrollHeight + "px";
      }
    } else {
      e.dropDown.style.maxHeight = null;
      e.arrow.classList.remove("rotate-90");
    }
  });
});
//
let toggleBtn = qsA(".toggleBtn");
toggleBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
    if (e.classList.contains("active")) {
      e.classList.add("bg-blue-700");
      e.classList.remove("bg-blue-100");
      e.children[0].classList.add("translate-x-[80%]");
      e.children[0].classList.remove("translate-x-0");
      // e.nextElementSibling;
    } else {
      e.classList.remove("bg-blue-700");
      e.classList.add("bg-blue-100");
      e.children[0].classList.remove("translate-x-[80%]");
      e.children[0].classList.add("translate-x-0");
    }
  });
});
const notify = [
  {
    btn: qs(".alertBtn"),
    list: qs(".alertList"),
  },
  {
    btn: qs(".updateBtn"),
    list: qs(".updateList"),
  },
  {
    btn: qs(".logBtn"),
    list: qs(".logList"),
  },
];
notify.forEach((e) => {
  // console.log(e.btn);

  e.btn.addEventListener("click", () => {
    e.list.classList.toggle("active");
    if (e.list.classList.contains("active")) {
      e.btn.classList.add("bg-blue-50");
      e.btn.classList.add("text-blue-700");
      e.list.classList.remove("hidden");
      e.list.classList.add("flex");
    } else {
      e.list.classList.add("hidden");
      e.list.classList.remove("flex");
    }
    notify.forEach((y) => {
      if (y.list.classList.contains("active") && y != e) {
        y.btn.classList.remove("bg-blue-50");
        y.btn.classList.remove("text-blue-700");
        y.list.classList.add("hidden");
        y.list.classList.remove("flex");
        y.list.classList.remove("active");
      }
    });
  });
});

const settingBtn = qs(".settingsBtn");
const settingCloseBtn = qs(".searchCrossBtn");
const settings = qs(".searchPreference");
const sBtns = qsA(".sBtn");
sBtns.forEach((e) => {
  e.addEventListener("click", showSettings);
});
settingBtn.addEventListener("click", showSettings);
settingCloseBtn.addEventListener("click", showSettings);
function showSettings() {
  settings.classList.toggle("active");
  if (settings.classList.contains("active")) {
    settings.classList.remove("translate-x-full");
  } else {
    settings.classList.add("translate-x-full");
  }
}
// Header
