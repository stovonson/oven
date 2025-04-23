document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-button");
  const projects = document.querySelectorAll(".project");

  let activeFilters = [];

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-filter");

      // Toggle tag in activeFilters
      if (activeFilters.includes(tag)) {
        activeFilters = activeFilters.filter(f => f !== tag);
        button.classList.remove("active");
      } else {
        activeFilters.push(tag);
        button.classList.add("active");
      }

      // If no filters selected, show all
      if (activeFilters.length === 0) {
        projects.forEach(project => {
          project.style.display = "flex";
        });
      } else {
        projects.forEach(project => {
          const projectTag = project.getAttribute("data-tag");
          if (activeFilters.includes(projectTag)) {
            project.style.display = "flex";
          } else {
            project.style.display = "none";
          }
        });
      }
    });
  });
});
