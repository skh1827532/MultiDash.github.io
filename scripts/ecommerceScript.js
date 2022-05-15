// Chart Script
var ctx = document.getElementById("myChart").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(29, 78, 216, 0.24)");
gradient.addColorStop(0.4, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 10, 35, 10, 45, 22, 45, 20, 20],
        backgroundColor: gradient,
        borderColor: "#1D4ED8",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      hover: {
        mode: "nearest",
        intersect: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },

        displayColors: false,

        padding: 4,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        caretSize: 5,
        caretPadding: 12,
        boxWidth: 20,
        titleColor: "#475569",
        bodyColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "July";
          },
          label: function (tooltipItem, data) {
            return "$ 2500";
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
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    generateLabels: {
      hidden: true,
    },
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  },
});

// Chart Script
var ctx = document.getElementById("myChart2").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(29, 78, 216, 0.24)");
gradient.addColorStop(0.4, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 10, 35, 10, 45, 22, 45, 20, 20],

        backgroundColor: gradient,
        borderColor: "#1D4ED8",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      hover: {
        mode: "nearest",
        intersect: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },

        displayColors: false,

        padding: 4,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 5,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        boxWidth: 20,
        titleColor: "#475569",
        bodyColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "July";
          },
          label: function (tooltipItem, data) {
            return "$ 2500";
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
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    generateLabels: {
      hidden: true,
    },
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  },
});

// Chart Script
var ctx = document.getElementById("myChart3").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(29, 78, 216, 0.24)");
gradient.addColorStop(0.4, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 10, 35, 10, 45, 22, 45, 20, 20],

        backgroundColor: gradient,
        borderColor: "#1D4ED8",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      hover: {
        mode: "nearest",
        intersect: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },

        displayColors: false,

        padding: 4,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 5,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        caretPadding: 12,
        boxWidth: 20,
        titleColor: "#475569",
        bodyColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "July";
          },
          label: function (tooltipItem, data) {
            return "$ 2500";
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
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    generateLabels: {
      hidden: true,
    },
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  },
});

// Chart Script
var ctx = document.getElementById("myChart4").getContext("2d");
var gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, "rgba(29, 78, 216, 0.24)");
gradient.addColorStop(0.4, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 10, 35, 10, 45, 22, 45, 20, 20],

        backgroundColor: gradient,
        borderColor: "#1D4ED8",
        borderWidth: 3,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      hover: {
        mode: "nearest",
        intersect: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },

        displayColors: false,

        padding: 4,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 5,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        width: 60,
        boxWidth: 20,
        titleColor: "#475569",
        bodyColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "July";
          },
          label: function (tooltipItem, data) {
            return "$ 2500";
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
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    generateLabels: {
      hidden: true,
    },
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  },
});

const ChartMain = document.getElementById("my-chart-main").getContext("2d");
var gradient5 = ChartMain.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0.1, "rgba(29, 78, 216, 0.24)");
gradient.addColorStop(1, "rgba(29, 78, 216, 0) ");

// Main Chart Script
const chartMain = new Chart(ChartMain, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        borderColor: "#1D4ED8",
        data: [8, 40, 22, 35, 25, 0, 45, 32, 50, 40, 30, 20, 60, 40, 60, 50],
        fill: true,
        borderWidth: 4,
        pointBorderWidth: "0",
        backgroundColor: gradient,
        lineTension: 0.5,
        pointHoverRadius: "0",
        pointStyle: "rectRounded",
        pointBorderWidth: "0",
        pointBorderColor: "#ffffff",
        pointRadius: "0",
        pointHoverRadius: "0",
        pointHoverBorderWidth: "0",
        pointHoverBackgroundColor: "#171717",
        pointHoverBorderColor: "#FFFFFF",
      },
      {
        borderColor: "#E2E8F0",
        data: [0, 60, 40, 60, 18, 40, 2, 35, 25, 60, 45, 32, 50, 40, 30],
        fill: false,
        borderWidth: 4,
        pointBorderWidth: "0",
        backgroundColor: "#171717",
        lineTension: 0.5,
        pointHoverRadius: "0",
        pointStyle: "rectRounded",
        pointBorderWidth: "0",
        pointBorderColor: "#ffffff",
        pointRadius: "0",
        pointHoverRadius: "0",
        pointHoverBorderWidth: "0",
        pointHoverBackgroundColor: "#171717",
        pointHoverBorderColor: "#FFFFFF",
      },
    ],
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 12,
        },
        titleFont: {
          size: 8,
        },
        footerFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
        },

        displayColors: false,
        borderColor: "#f8fafc",
        borderWidth: 2,
        caretSize: 8,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        // xAlign: "center",
        yAlign: "center",
        titleColor: "#A3A3A3",
        bodyColor: "#171717",
        padding: 12,
        height: 100,
        footerColor: "#A3A3A3",
        callbacks: {
          title: function (tooltipItem, data) {
            return "Net profit";
          },
          label: function (tooltipItem, data) {
            if (tooltipItem.datasetIndex === 0) {
              return "$57,400";
            }
          },
          footer: function (tooltipItem, data) {
            return "March";
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
    },
    scales: {
      beginAtZero: false,
      y: {
        grid: {
          display: true,
          drawBorder: false,
        },
        ticks: {
          stepSize: 20,
          beginAtZero: false,
          font: {
            size: 16,
            lineHeight: 2,
          },
          callback: function (value, index, values) {
            if (value == 0) {
              return "20k    ";
            }
            return value + 20 + "k    ";
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
            lineHeight: 2,
          },
        },
      },
    },
  },
});

// Chart dropdown
document.querySelector(".dropdown-one").addEventListener("click", function () {
  document.querySelector(".dwy").classList.toggle("hidden");
});
// Chart dropdown
document.querySelectorAll(".cr").forEach((e) => {
  e.addEventListener("click", function (e1) {
    document.querySelector(".dropbtn-one1").textContent = e1.target.textContent;
  });
});

// Table interaction
function showDiv() {
  const val = document.getElementById("handleClick");
  console.log(val);
  val.classList.toggle("hidden");
  val.classList.toggle("z-10");
  // if (val === "block") {
  //   val.classList.add
  //   document.getElementById("handleClick").style.display = "none";
  //   return;
  // }
  // document.getElementById("handleClick").style.display = "block";
}

// Overview Interaction
function toggleOverview() {
  document.querySelector(".overview-interaction").classList.toggle("hidden");
}

const allInter = document.querySelectorAll(".interactions");

const closeAll = () => {
  allInter.forEach((e) => {
    if (!e.classList.contains("hidden")) {
      e.classList.add("hidden");
    }
  });
};
//Filter options interaction dropdown
function showFilteroptionInteraction() {
  console.log("in status");
  document.getElementById("dropdownDivider").classList.toggle("hidden");
}
document.querySelectorAll("#dropdownDivider a").forEach((a) => {
  a.style.cursor = "pointer";
  a.style.display = "block";

  a.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    document.getElementById("setfilterText").innerText = e.target.textContent;
    document.getElementById("dropdownDivider").classList.add("hidden");
  });
});
//For closing more option of New Member
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});
