const myBarChart = new Chart(document.getElementById("chartjs-1"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#1D4ED8",
        fillColor: "red",
        data: [-60, -70, -80, -40, -60, -80],
      },
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#DBEAFE",
        data: [60, 70, 80, 40, 60, 80],
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
        usePointStyle: true,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 10,
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#d1d5db",
        borderWidth: 1,
        titleFont: "bold",
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              padding: 10,
            };
          },
          label: function (tooltipItem, data) {
            return "Category 1";
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
        display: false,
        stacked: true,
        ticks: {
          // forces step size to be 50 units
          color: "#9CA3AF",

          font: {
            size: 12,
            lineHeight: 2,
          },

          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        ticks: {
          color: "#9CA3AF",
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

const myBarChart1 = new Chart(document.getElementById("chartjs-2"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#1D4ED8",
        fillColor: "red",
        data: [-60, -70, -80, -40, -60, -80],
      },
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#DBEAFE",
        data: [60, 70, 80, 40, 60, 80],
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
        usePointStyle: true,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 10,
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#d1d5db",
        borderWidth: 1,
        titleFont: "bold",
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              padding: 10,
            };
          },
          label: function (tooltipItem, data) {
            return "Category 2";
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
        display: false,
        stacked: true,
        ticks: {
          // forces step size to be 50 units
          color: "#9CA3AF",

          font: {
            size: 12,
            lineHeight: 2,
          },

          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        ticks: {
          color: "#9CA3AF",
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

const myBarChart2 = new Chart(document.getElementById("chartjs-3"), {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#1D4ED8",
        fillColor: "red",
        data: [-60, -70, -80, -40, -60, -80],
      },
      {
        barThickness: 7,
        borderRadius: 25,
        fill: false,
        backgroundColor: "#DBEAFE",
        data: [60, 70, 80, 40, 60, 80],
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
        usePointStyle: true,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 10,
        titleColor: "#000000",
        bodyColor: "#000000",
        borderColor: "#d1d5db",
        borderWidth: 1,
        titleFont: "bold",
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              padding: 10,
            };
          },
          label: function (tooltipItem, data) {
            return "Category 3";
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
        display: false,
        stacked: true,
        ticks: {
          // forces step size to be 50 units
          color: "#9CA3AF",

          font: {
            size: 12,
            lineHeight: 2,
          },

          stepSize: 20,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        stacked: true,
        ticks: {
          color: "#9CA3AF",
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

// Member statistics Dropdown
function showDiv() {
  document.getElementById("handleClick").style.display = "block";
}

function show() {
  document.getElementById("plans").style.display = "block";
}
function hide() {
  document.getElementById("plans").style.display = "none";
}

function toggleDropdown2(e) {
  document.getElementById("handleClick").classList.toggle("hidden");
}

// Line chart card
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",

  data: {
    labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        fill: false,

        data: [2, 3, 8, 8, 4, 4, 11, 5, 5, 9, 10, 9],

        borderColor: "#1D4ED8",
        borderJoinStyle: "bevel",
        fill: false,
        pointStyle: "circle",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: true,
    bezierCurve: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          usePointStyle: false,
        },
      },
    },
    scales: {
      y: {
        ticks: { beginAtZero: true },
        display: false,
      },
      x: {
        display: false,
      },
    },
  },
});

// Three Cols bar chart
const labels = [
  "10:00 AM",
  "11:00 AM",
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
];

// Config Block
// Render Block

var mmainchart = document.getElementById("myChart2").getContext("2d");

var gradient5 = mmainchart.createLinearGradient(0, 0, 0, 450);
gradient5.addColorStop(0.1, "rgba(29, 78, 216, 0.24)");
gradient5.addColorStop(0.5, "rgba(29, 78, 216, 0) ");
const myChart2 = new Chart(mmainchart, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Users ",
        data: [30000, 25000, 45000, 27000, 34000, 30000],

        borderColor: "rgba(29, 78, 216, 1)",
        fill: true,
        backgroundColor: gradient5,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: "#fff",
        pointHoverRadius: 5,
      },
      {
        label: "",
        data: [0, 0, 0, 0, 0, 0],

        borderColor: "rgba(148, 163, 184, 1)",
        borderWidth: 1,
        pointRadius: 3,
        pointBackgroundColor: "rgba(148, 163, 184, 1)",
        pointHoverRadius: 5,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    annotation: {
      annotations: [],
    },
    plugins: {
      tooltip: {
        padding: 7,
        backgroundColor: "#ffffff",
        displayColors: false,
        usePointStyle: true,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 10,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },
        titleColor: "#1E293B",
        bodyColor: "#475569",
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
            return "49k Users";
          },
          title: function (tooltipItem, data) {
            return "July";
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
    tension: 0.4,
    borderWidth: 2,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [8, 4],
          color: "rgba(226, 232, 240, 1)",
        },
        ticks: {
          stepSize: 10000,
          callback: function (label, index, labels) {
            if (index === 0) {
              return "0      ";
            } else {
              return label / 1000 + "k";
            }
          },
        },
        scaleLabel: {
          display: true,
          labelString: "1000 = 1k",
        },
        beginAtZero: true,
      },
    },
  },
});
//for line

function showChartMenu() {
  document.getElementById("chart-menu").classList.toggle("hidden");
}

// document
// 	.getElementById("main-checkbox")
// 	.addEventListener("change", function (e) {
// 		console.log(e.target.checked);
// 		const allChecks = document.querySelectorAll(".form-check-input");
// 		allChecks.forEach((check) => {
// 			check.checked = e.target.checked;
// 		});
// 	});
//For closing more option of New Member
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});
