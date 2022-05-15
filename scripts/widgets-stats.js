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
					size: 10,
				},

				displayColors: false,

				padding: 4,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				borderColor: "#d1d5db",
				borderWidth: 0.5,
				caretSize: 0,
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
					size: 10,
				},

				displayColors: false,

				padding: 4,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
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
					size: 10,
				},

				displayColors: false,

				padding: 4,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
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
					size: 10,
				},

				displayColors: false,

				padding: 4,
				backgroundColor: "#ffffff",
				pointRadius: "0",
				caretSize: 0,
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
const ctx4 = document.getElementById("myChart").getContext("2d");
const myChart2 = new Chart(ctx4, {
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
