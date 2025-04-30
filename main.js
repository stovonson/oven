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
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('site-search');
  const searchButton = document.getElementById('search-button');
  const projects = document.querySelectorAll('.project');
  
  const noResults = document.createElement('div');
  noResults.className = 'no-results';
  noResults.textContent = 'No matching sites found';
  document.querySelector('.projects').after(noResults);
  
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let resultsFound = false;
    
    projects.forEach(project => {
      const siteName = project.querySelector('span').textContent.toLowerCase();
      const tags = Array.from(project.querySelectorAll('p')).map(p => p.textContent.toLowerCase());
      const matchesSiteName = siteName.includes(searchTerm);
      const matchesTags = tags.some(tag => tag.includes(searchTerm));
      
      if (searchTerm === '' || matchesSiteName || matchesTags) {
        project.style.display = 'flex';
        resultsFound = true;
      } else {
        project.style.display = 'none';
      }
    });
    
    noResults.style.display = resultsFound ? 'none' : 'block';
  }
  
  searchButton.addEventListener('click', performSearch);
  
  searchInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
  
  searchInput.addEventListener('input', function() {
    if (searchInput.value === '') {
      performSearch();
    }
  });
  
  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      searchInput.value = '';
    });
  });
});
