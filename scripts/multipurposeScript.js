// Chart Script
var ctx = document.getElementById("myChart").getContext("2d");
var gradient5 = ctx.createLinearGradient(0, 0, 0, 450);

gradient5.addColorStop(0.1, "rgba(29, 78, 216, 0.24)");
gradient5.addColorStop(0.5, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        data: [20, 70, 45, 30, 50, 60, 70, 80, 90, 100],
        backgroundColor: gradient5,
        borderColor: "#1D4ED8",
        borderWidth: 2,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
      },
    ],
  },
  options: {
    responsive:false,
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

        padding: 10,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 5,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        boxWidth: 12,

        bodyColor: "#1E293B",
        titleColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "july";
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

//schedule interaction
// function toggleDropdown2(e) {
//   document.getElementById("handleClick").classList.toggle("hidden");
// }
function show() {
  document.getElementById("plans").style.display = "block";
}
function hide() {
  document.getElementById("plans").style.display = "none";
}
const allArrivalBtns = document.querySelectorAll(".arrival-btn");
allArrivalBtns.forEach((e) => {
  e.addEventListener("click", () => {
    allArrivalBtns.forEach((y) => {
      if (y.classList.contains("active") && y != e) {
        y.classList.toggle("text-blue-700");
        y.classList.toggle("bg-blue-50");
        y.classList.toggle("active");
        y.classList.toggle("text-gray-600");
      }
    });

    if (!e.classList.contains("active")) {
      e.classList.add("text-blue-700");
      e.classList.add("bg-blue-50");
      e.classList.remove("text-gray-600");
      e.classList.add("active");
    }
  });
});
//For closing more option of New Member
document.querySelectorAll("#newMemberInteraction a").forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.toggle("hidden");
  });
});

// Data Objects 

const data=[

  
  {
desig:"Front End Developer",
category:"Engineering",
location:"Los Angeles, California",
time:"Full-time",
closing:"Closing on 23 July,2021"


  },
  {
    desig:"Back End Developer",
    category:"Engineering",
    location:"Los Angeles, California",
    time:"Full-time",
    closing:"Closing on 23 July,2021"
    
    
      },
      {
        desig:"Graphic Designer",
        category:"Engineering",
        location:"Los Angeles, California",
        time:"Full-time",
        closing:"Closing on 23 July,2021"
        
        
          },
          {
            desig:"Web Designer",
            category:"Engineering",
            location:"Los Angeles, California",
            time:"Full-time",
            closing:"Closing on 23 July,2021"
            
            
              }

]

function changeData(){
  
 
}