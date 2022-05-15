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
      ctx.fillText("completed", width / 2, 140);
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

// Main chart
function mainChart() {
  //Data block
  const data = {
    labels: ["  Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
        enabled:false,
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
        filter: function (tooltipItem) {
          return tooltipItem.datasetIndex === 0;
      },
        mode: "nearest",
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
          color: "#64748B",
          backgroundColor: "#FFFFFF",

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
        
        
        beginAtZero:false,
        grid: {
          display: false,
        },
        ticks: {
          callback: function (val) {
            switch(val) {
              case 0 :
                return '                      Mon'
              case 1: 
              return 'Tue'
              case 2: 
              return 'Wed'
              case 3: 
              return 'Thu'
              case 4: 
              return 'Fri'
              case 5: 
              return 'Sat'
              
            }
          },
          color: "#64748B",
          backdropPadding: {
            x: 50,
            y: 4
        }
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

window.addEventListener("resize", () => {
  mainChart();
  if (window.innerWidth < 1024) {
    const el = document.getElementById("myChart");
    el.removeAttribute("height");
  }
});
//statistics

//schedule interaction

function show() {
  document.getElementById("plans").style.display = "block";
}
function hide() {
  document.getElementById("plans").style.display = "none";
}

// document.querySelector("body").addEventListener("click", () => {
//   if (
//     !document.getElementById("members-interaction").classList.contains("hidden")
//   ) {
//     document.getElementById("members-interaction").classList.toggle("hidden");
//   }
// });
//For closing more option of New Member
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});
