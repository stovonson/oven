document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");

  let activeFilters = [];

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-filter");

      if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(f => f !== tag);
        button.classList.remove("active");
      } else {
        activeFilters.push(tag);
        button.classList.add("active");
      }
      
      if (activeFilters.length === 0) {
        projects.forEach(project => {
          project.style.display = "flex";
        });
      } else {
        projects.forEach(project => {
          const projectTagsString = project.getAttribute("data-tag");
          const projectTags = projectTagsString.split(" ");
          let showProject = false;
          for(const tag of activeFilters){
            if (projectTags.includes(tag)){
              showProject = true;
            }
          }
          if (showProject) {
              project.style.display = "flex";
          } else {
            project.style.display = "none";
          }
        });
      }
    });
  });
});
