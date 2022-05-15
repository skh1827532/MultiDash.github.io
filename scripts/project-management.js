console.log("project-management.js");
function getDoughnut() {
  const labels = ["red", "blue", "yellow", "green", "purple", "orange"];

  //Cofig Bloack
  var config = {
    type: "doughnut",
    data: {
      datasets: [
        {
          borderWidth: 0,
          data: [76, 24],
          backgroundColor: ["#16A34A", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [50, 50],
          backgroundColor: ["#1D4ED8", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [70, 30],
          backgroundColor: ["#EAB308", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [33, 67],
          backgroundColor: ["#DC2626", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,

          label: "Doughnut 2",
        },
      ],
    },
    options: {
      responsive: true,
      legend: {
        display: false,
      },

      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
  };

  // Render Block
  const myChart = new Chart(document.getElementById("myChartDough"), config);
}

getDoughnut();

// Main chart
function mainChart() {
  //Data block
  const data = {
    labels: [
      "        Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
    ],
    datasets: [
      {
        display: false,
        label: "online",
        data: [60, 58, 68, 68, 68, 68, 68, 68, 60, 50],
        fill: true,
        borderColor: "#1D4ED8",
        backgroundColor: "#EFF6FF",
        borderCapStyle: "round",
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointBackgroundColor: "#ffffff",
      },
      {
        label: "sales",
        data: [80, 78, 88, 88, 84, 88, 86, 80, 80, 70],
        fill: true,
        borderColor: "#DC2626",
        backgroundColor: "#FEE2E2",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointBackgroundColor: "#ffffff",
      },
    ],
  };
  //options
  const options = {
    mantainAspectRatio: true,
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 20,
        },

        displayColors: false,

        padding: 8,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 0,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        boxWidth: 40,
        titleColor: "#475569",
        bodyColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "23 July";
          },
          label: function (tooltipItem, data) {
            if (tooltipItem.datasetIndex === 0) {
              return "49k Users";
            }
          },
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              pointRadius: "0",
              padding: 0,
            };
          },
        },
      },
      legend: {
        display: false,
        align: "end",
        labels: {
          display: false,
          usePointStyle: true,
          pointStyle: "circle",
          padding: 30,
        },
      },
    },
    legend: {
      display: true,
    },
    layout: {
      padding: 20,
    },
    // bezierCurve: true,
    scales: {
      y: {
        suggestedMin: 50,
        suggestedMax: 100,
        grid: {
          display: false,
        },
        beginAtZero: true,
        min: 50,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          color: "#64748B",
          stepSize: 10,
          font: {
            size: 14,
          },
          callback: function (value, index, values) {
            if (index === 0) {
              return value;
            } else {
              return value;
            }
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
          color: "#64748B",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  // Config Block
  const config = {
    type: "line",
    data: data,
    options: options,
  };

  // Render Block
  const myChart = new Chart(document.getElementById("myChart"), config);
}

mainChart();
// Main chart

// function showNewMemberInteraction() {
//   document.getElementById("newMemberInteraction").classList.toggle("hidden");
// }

const els = document.querySelector(".actions-intereaction");
function handleActionsInteraction(el) {
  document.querySelectorAll("#hideMe").forEach((el) => {
    el.classList.add("hidden");
  });
  el.parentElement.children[1].classList.remove("hidden");
  // console.log(el.children[1]);

  el.parentElement.children[1].childNodes.forEach((els) => {
    // console.log(els);
    els.addEventListener("click", () => {
      // console.log(ets);
      // e.parentElement.classList.add("hidden");
      console.log(els.parentElement);
      els.parentElement.style.display = "none";
    });
  });
}

const target = document.getElementById("add-target");
function toggleAddTarget() {
  target.classList.toggle("hidden");
}

function moreoptionmodal(el) {
  el.parentElement.children[1].classList.toggle("hidden");
}
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});

const user = document.getElementById("add-user");
function toggleAddUser() {
  user.classList.toggle("hidden");
}
//for meta tags

const tagdiv = document.querySelector(".append-tags");
function appendSpan(el, event) {
  console.log(event.code);
  if (event.code === "Enter" && el.value.trim().length > 3) {
    const span = document.createElement("span");
    span.classList.add(
      "bg-blue-100",
      "rounded",
      "py-1",
      "px-2",
      "text-xs",
      "font-medium",
      "text-blue-700",
      "flex",
      "items-center",
      "justify-center",
      "gap-1",
      "hover:opacity-90",
      "cursor-pointer"
    );
    const spanText = document.createElement("p");
    span.innerText += el.value;
    span.innerHTML += `
                <svg onclick='deleteTag(this)' class='cursor-pointer mt-[2px] hover:opacity-70' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.625 8.625L3.375 3.375" stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.625 3.375L3.375 8.625" stroke="#1D4ED8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                `;
    tagdiv.appendChild(span);
    el.value = "";
  }
}

function deleteTag(el) {
  el.parentElement.remove();
}

function setFocus() {
  document.querySelector("#meta-enter").focus();
}
//New Member Interaction

function showNewMemberInteraction(el) {
  el.parentElement.children[1].classList.toggle("hidden");
  // document.getElementById("newMemberInteraction").classList.toggle("hidden");
}
document
  .querySelectorAll("#newMemberInteraction2 a")
  .forEach(function (element) {
    element.addEventListener("click", function () {
      document
        .getElementById("newMemberInteraction2")
        .classList.toggle("hidden");
    });
  });
