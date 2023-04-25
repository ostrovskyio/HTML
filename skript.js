class GitHubApi {
	constructor(token, username) {
		this.token = token;
		this.username = username;
	}

	async getRepos() {
		const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
			headers: {
				Authorization: `Basic ${btoa(`${this.username}:${this.token}`)}`,
			},
		});
		const data = await response.json();
		return data;
	}
}
window.addEventListener("load", async () => {
	const token = "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";
	const username = "ostrovskyio";

	const api = new GitHubApi(token, username);
	const repos = await api.getRepos();

	const reposList = document.getElementById("repos-list");
	repos.forEach((repo) => {
		const repoLink = document.createElement("a");
		repoLink.href = repo.html_url;
		repoLink.textContent = repo.name;

		const repoListItem = document.createElement("li");
		repoListItem.appendChild(repoLink);

		reposList.appendChild(repoListItem);
	});
});

api.getRepos().then(repos => {
  repos.forEach(repo => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = repo.html_url;
    a.textContent = repo.name;
    li.appendChild(a);
    repoList.appendChild(li);
  });
});



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
  