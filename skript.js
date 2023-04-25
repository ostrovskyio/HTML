function loadProjects() {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://api.github.com/users/ostrovskyio/repos",
    true
  );
  request.onload = function () {
    const repos = JSON.parse(this.response);
    const projectsList = document.getElementById("projects");
    repos.forEach((repo) => {
      const project = document.createElement("li");
      const link = document.createElement("a");
      link.href = repo.html_url;
      link.textContent = repo.name;
      project.appendChild(link);
      projectsList.appendChild(project);
    });
  };
  request.send();
}

function zoomIn(img) {
    if (img.style.width === '150%') {
      zoomOut(img);
      return;
    }
    img.style.transition = 'all 0.5s ease-in-out';
    img.style.width = '150%';
    img.style.height = '150%';
  }
  
  function zoomOut(img) {
    img.style.transition = 'all 0.5s ease-in-out';
    img.style.width = '100%';
    img.style.height = '100%';
  }


  document.addEventListener('keydown', function(event) {
    var key = event.key.toLowerCase();
    var element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  });
  