const projects = document.querySelectorAll(".project-container");

projects.forEach((project) => {
  const leftBtn = project.querySelector(".left");
  const rightBtn = project.querySelector(".right");
  const imgLabels = project.querySelectorAll(".project-list li");
  const projectImgs = project.querySelectorAll(".project-img");

  var idx = 1;

  rightBtn.addEventListener("click", () => {
    idx + 1 > imgLabels.length ? (idx = 1) : (idx += 1);
    updateDisplay(idx, imgLabels, projectImgs);
  });

  leftBtn.addEventListener("click", () => {
    idx - 1 === 0 ? (idx = imgLabels.length) : (idx -= 1);
    updateDisplay(idx, imgLabels, projectImgs);
  });
});

function updateDisplay(idx, imgLabels, projectImgs) {
  imgLabels.forEach((label) => {
    label.classList.remove("active");
  });

  projectImgs.forEach((img) => {
    img.classList.remove("active");
  });

  imgLabels[idx - 1].classList.add("active");
  projectImgs[idx - 1].classList.add("active");
}
