document.addEventListener("DOMContentLoaded", function() {
  const inputForm = document.querySelector(".form-control");
  const changeButton = document.querySelector(".btn");
  const renderHeader = document.querySelector(".git-header");
  const renderContainer = document.querySelector(".repo-list");
  let username = "";
  let gitUrl = "";
  let repos = [];
  //   console.log(inputForm);
  //   console.log(changeButton);
  //   console.log(renderHeader);
  //   console.log(renderContainer);

  const renderRepoList = data => {
    data.map(repo => {
      renderContainer.innerHTML += `
            <div class="row repo">
            <h3>
                <a href="${repo.html_url}">
                ${repo.name}
                </a>
            </h3>
            <p>
                <strong>Description:</strong>
                <span>${repo.description ? repo.description : "None"}</span>
            </p>
            <p>
                <strong>Owner:</strong>
                <span>${repo.owner.login}</span>
            </p>
            <div class="stats">
                <div class="col-sm-1 stars">
                <svg
                    class="icon"
                    aria-hidden="true"
                    height="16"
                    version="1.1"
                    viewBox="0 0 14 16"
                    width="14"
                >
                    <use xlink:href="./svg/sprites.svg#star"></use>
                </svg>
                <span>Forks: ${repo.forks}</span>
                </div>
                <div class="col-sm-1 forks">
                <svg
                    aria-hidden="true"
                    height="16"
                    version="1.1"
                    viewBox="0 0 10 16"
                    width="10"
                >
                    <use xlink:href="./svg/sprites.svg#fork"></use>
                </svg>
                <span>Watchers: ${repo.watchers}</span>
                </div>
            </div>
            </div>
        `;
    });
  };

  const renderRepos = (name, url) => {
    // console.log(name, url);
    fetch(url)
      .then(data => data.json())
      .then(data => {
        repos = data;
        renderHeader.innerHTML = `
            <h2>
            Showing repos from
            <a href="${url}">${name}</a>
            </h2>
        `;
        renderRepoList(repos);
        // console.log(repos);
      });
  };

  inputForm.addEventListener("keyup", e => {
    username = inputForm.value;
    // console.log(username);
  });

  changeButton.addEventListener("click", e => {
    e.preventDefault();
    gitUrl = `https://api.github.com/users/${username}/repos`;
    // console.log(gitUrl);
    renderContainer.innerHTML = "";
    inputForm.value = "";
    renderRepos(username, gitUrl);
  });
});
