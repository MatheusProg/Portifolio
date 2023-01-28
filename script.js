const projects = document.querySelector(".projects")

function getApiGithub() {
  fetch("https://api.github.com/users/MatheusProg/repos").then(async (res) => {
    if (!res.ok) {
      throw new error(res.status)
    }

    let data = await res.json()
    let card = data.slice(3, 6)
    card.map((item) => {
      let gitCard = document.createElement("div")
      gitCard.innerHTML = `
      <div class="gitCard border">
        <h4><img src="./img/folder.svg" alt="folder" />${item.name}</h4>
        <p>${item.description}</p>
        <ul class="dados">
          <li><img src="./img/star.svg" alt="star" />${item.stargazers_count}</li>
          <li><img src="./img/view.svg" alt="view" />${item.watchers_count}</li>
          <li><img src="./img/Ellipse.svg" alt="Ellipse" />${item.language}</li>
        </ul>
      </div>
      `
      projects.appendChild(gitCard)
    })
  })
}

getApiGithub()
