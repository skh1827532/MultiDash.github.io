const statsCheckBox = document.querySelector(".allCheckStats");
const statTick = document.querySelector(".allSvgTickStat");
const allCheckBoxStat = document.querySelectorAll(".checkStat");
let allCheckBoxStatArr = [...allCheckBoxStat];
const allSvgTicksStat = document.querySelectorAll(".svgTickStats");
const classestoTogglev3 = [
  "bg-blue-700",
  "border-transparent",
  "active",
  "accent-white",
  "accent-blue-700",
];

statsCheckBox.addEventListener("click", (e) => {
  const isChecked = e.target.checked;
  statTick.classList.add("active");
  statTick.classList.toggle("-z-10");
  if (isChecked) {
    classestoTogglev3.forEach((c) => {
      statsCheckBox.classList.toggle(c);
    });

    allCheckBoxStat.forEach((ac) => {
      if (!ac.checked) {
        classestoTogglev3.forEach((c) => {
          ac.classList.toggle(c);
        });
        ac.checked = true;

        ac.nextElementSibling.classList.toggle("-z-10");
        statTick.classList.remove("-z-10");
      }
    });
  } else {
    allCheckBoxStat.forEach((ac) => {
      ac.checked = false;
    });
  }
});

statTick.addEventListener("click", (t) => {
  statTick.classList.toggle("-z-10");

  statsCheckBox.checked = false;

  classestoTogglev3.forEach((c) => {
    statsCheckBox.classList.toggle(c);
  });
  allSvgTicksStat.forEach((at) => {
    classestoTogglev3.forEach((c) => {
      at.previousElementSibling.classList.toggle(c);
    });
    at.classList.toggle("-z-10");

    at.previousElementSibling.checked = false;
  });
});
allCheckBoxStat.forEach((e) => {
  e.addEventListener("click", (y) => {
    classestoTogglev3.forEach((c) => {
      y.target.classList.toggle(c);
    });

    if (y.target.checked) {
      e.nextElementSibling.classList.toggle("-z-10");
      e.nextElementSibling.classList.toggle("active");
    }
    if (allCheckBoxStatArr.every((aca) => aca.checked)) {
      console.log("in every allCheckBox");
      statsCheckBox.checked = true;
      classestoTogglev3.forEach((c) => {
        statsCheckBox.classList.toggle(c);
      });
      statTick.classList.toggle("-z-10");
    }
  });
});
allSvgTicksStat.forEach((e) => {
  e.addEventListener("click", (y) => {
    classestoTogglev3.forEach((c) => {
      e.previousElementSibling.classList.toggle(c);
    });
    e.classList.toggle("-z-10");
    e.classList.toggle("active");

    e.previousElementSibling.checked = false;
    if (
      !allCheckBoxStatArr.every((aca) => aca.checked) &&
      !statTick.classList.contains("-z-10")
    ) {
      console.log("in every allCheckBox");
      statsCheckBox.checked = false;
      classestoTogglev3.forEach((c) => {
        statsCheckBox.classList.toggle(c);
      });
      statTick.classList.toggle("-z-10");
    }
    // if (statTick.classList.contains("active")) {
    //   statTick.classList.add("-z-10");
    //   statTick.classList.remove("active");
    //   statsCheckBox.checked = false;
    //   classestoTogglev3.forEach((c) => {
    //     statsCheckBox.classList.toggle(c);
    //   });
    // }
  });
});
