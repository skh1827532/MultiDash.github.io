let notification = document.getElementById("notification");
let flag = true;
const dropdownHandler = () => {
  if (flag) {
    notification.classList.remove("hidden");
    flag = false;
  } else {
    flag = true;
    notification.classList.add("hidden");
  }
};

// Progress bar
// Delivered
var i = 0;
if (i == 0) {
  i = 1;
  let elem = document.getElementById("delivered");

  var text = document.getElementById("percentageDelivered");
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 50) {
      i = 0;
    } else {
      width++;
      elem.style.width = width + "%";
      text.innerHTML = width + "%";
    }
  }
}
var a = 0;
if (a == 0) {
  a = 1;
  let elem = document.getElementById("reported");

  let text = document.getElementById("percentageReported");
  var width = 0;
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 50) {
      a = 0;
    } else {
      width++;
      elem.style.width = width + "%";
      text.innerHTML = width + "%";
    }
  }
}
// Ordered
var b = 0;
if (b == 0) {
  b = 1;
  var elem = document.getElementById("Ordered");
  let text = document.getElementById("percentageOrdered");
  var width = 0;
  var id = setInterval(frameTwo, 30);
  function frameTwo() {
    if (width >= 43) {
      b = 0;
    } else {
      width++;
      elem.style.width = width + "%";
      text.innerHTML = width + "%";
    }
  }
}

const myBarChart = new Chart(document.getElementById("chartjs-1"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Project 1",
        barThickness: 9,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#3B82F6",
        data: [60, 70, 80, 40, 60, 80, 70, 6, 50],
      },
      {
        label: "Project 2",
        barThickness: 9,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#BFDBFE",
        fillColor: "red",
        data: [80, 90, 100, 60, 80, 90, 95, 100, 85],
      },
      {
        label: "Project 3",
        barThickness: 9,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#1D4ED8",
        data: [50, 60, 70, 60, 40, 70, 60, 50, 40],
      },
    ],
  },
  options: {
    // responsive: true,
    // mantainAspectRatio: true,
    plugins: {
      tooltip: {
        padding: 7,
        backgroundColor: "#ffffff",
        displayColors: true,
        usePointStyle: true,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 10,
        titleColor: "#000000",
        bodyColor: "#000000",
        titleFontStyle: "bold",
        borderColor: "#d1d5db",
        borderWidth: 1,
        titleFont: "bold",
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              padding: 0,
            };
          },
          label: function (tooltipItem, data) {
            return "product 2";
          },
          title: function (tooltipItem, data) {
            return "$ 470";
          },
          body: function (tooltipItem, data) {
            return " ";
          },
        },
      },

      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return value + "%";
          },
          // forces step size to be 50 units
          color: "#171717",

          font: {
            size: 14,
            lineHeight: 2,
          },

          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#171717",
          font: {
            size: 14,
            lineHeight: 2,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    legend: {
      position: false,
    },
  },
});

function tableInteract(e) {
  if (e.checked == true) {
    e.parentElement.parentElement.parentElement.classList.add("bg-[#EFF6FF]");
    return;
  }
  e.parentElement.parentElement.parentElement.classList.remove("bg-[#EFF6FF]");
}

// Table checkbox
// const ele = document.querySelectorAll(".check-func");
// document.querySelector(".check-main").addEventListener("change", (e) => {
// 	if (e.target.checked == true) {
// 		ele.forEach((e) => {
// 			e.checked = true;
// 		});
// 		return;
// 	}
// 	ele.forEach((e) => {
// 		e.checked = false;
// 	});
// });

//Interaction on Table

const allInter = document.querySelectorAll(".interactions");

allInter.forEach((e) => {
  if (!e.classList.contains("hidden")) {
    e.classList.add("hidden");
  }
});

function openTableMenu(element) {
  element.parentElement.children[0].classList.toggle("hidden");
  element.parentElement.children[0].classList.toggle("active");
}

function closeAll() {
  document.querySelectorAll(".dropdown").forEach((e) => {
    if (e.classList.contains("hidden")) {
      return;
    }
    e.classList.add("hidden");
  });
}
//For closing more option of New Member
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});
