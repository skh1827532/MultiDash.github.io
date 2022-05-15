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

// Main chart
function mainChart() {
  //Data block
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        display: false,
        label: "online",
        data: [30, 77, 12, 45, 98, 50],
        fill: false,
        borderColor: "rgba(29, 78, 216, 1)",
        backgroundColor: "rgba(29, 78, 216, 1)",
        borderCapStyle: "round",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
        pointHitRadius: 10,
        pointBackgroundColor: "#ffffff",
      },
      {
        label: "sales",
        data: [100, 50, 45, 98, 60, 25],
        fill: false,
        borderColor: "rgba(96, 165, 250, 1)",
        backgroundColor: "rgba(96, 165, 250, 1)",
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
          size: 8,
        },
        bodyFont: {
          size: 12,
          weight: "bold",
        },

        displayColors: false,

        padding: 8,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 5,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        boxWidth: 40,
        titleColor: "#1E293B",
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
        grid: {
          display: false,
        },
        beginAtZero: true,
        min: 10,
        max: 100,
        ticks: {
          // forces step size to be 50 units
          color: "#212121",

          stepSize: 50,
          callback: function (value, index, values) {
            if (index === 0) {
              return value + "k";
            } else {
              return value + "K";
            }
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#212121",
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

// percent Chart
function getPercentChart() {
  const labels = ["red", "blue", "yellow", "green", "purple", "orange"];

  const data = {
    datasets: [
      {
        data: [57, 43],
        backgroundColor: ["rgba(29, 78, 216, 1)", "rgba(226, 232, 240, 1)"],
        borderWidth: 0,
        offset: 0,
      },
    ],
  };
  //hover Label
  const hoverLabel = {
    id: "hoverLabel",
    afterDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, right, top, bottom, width, height },
      } = chart;
      ctx.save();
      ctx.font = "bolder 48px Arial";
      ctx.fillStyle = "rgba(30, 41, 59, 1)";
      ctx.textAlign = "center";
      ctx.fillText("57%", width / 2, height / 2 + top);
      ctx.font = "normal 14px Arial";
      (ctx.fillStyle = "rgba(71, 85, 105, 1)"), (ctx.textAlign = "center");
      ctx.fillText("completed", width / 2, height / 2 + top + 30);
    },
  };

  // Config Block
  const config = {
    responsive: "responsive",
    type: "doughnut",
    data: data,
    plugins: [hoverLabel],
    options: {
      plugins: {
        tooltip: {
          enabled: false,
        },
      },
      layout: {},
      cutout: "80%",
    },
  };
  // Render Block
  const myChart = new Chart(document.getElementById("myChartPercent"), config);
}
getPercentChart();

// Dougnut Chart

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
          backgroundColor: ["rgba(29, 78, 216, 1)", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [50, 50],
          backgroundColor: ["rgba(236, 72, 153, 1)", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [70, 30],
          backgroundColor: ["rgba(99, 102, 241, 1)", "rgba(243, 244, 246, 1)"],
          borderRadius: 50,
        },
        {
          weight: 0.6,
        },
        {
          borderWidth: 0,
          data: [33, 67],
          backgroundColor: ["rgba(234, 179, 8, 1)", "rgba(243, 244, 246, 1)"],
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

function getEcommerce() {
  const ChartMain = document.getElementById("my-chart-main").getContext("2d");
  var gradient = ChartMain.createLinearGradient(0, 0, 0, 450);

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
          backgroundColor: gradient5,
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
}

getEcommerce();
