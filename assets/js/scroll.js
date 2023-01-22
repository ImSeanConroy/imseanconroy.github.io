window.addEventListener("scroll", checkProjects);

checkProjects();

function checkProjects() {
  const triggerBottom = (window.innerHeight / 5) * 3;
  projects.forEach((project) => {
    const boxTop = project.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      if (!project.classList.contains("show")) {
        project.classList.add("show");
        project.querySelector(".project-img").classList.add("active");
      }
    }
  });
}
