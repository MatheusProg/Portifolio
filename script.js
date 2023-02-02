const url = "https://api.github.com/users/MatheusProg/repos"

const projects = document.querySelector("#cardContainer")

async function getApiGithub() {
  const response = await fetch(url)

  const data = await response.json()
  const card = data.slice(3, 6)

  card.map((item) => {
    const gitCard = document.createElement("div")
    gitCard.className = "gitCard borderShadow"
    gitCard.innerHTML = `
      <h4><img src="./img/folder.svg" alt="folder" />${item.name}</h4>
      <p class="pp">${item.description}</p>
      <div class="dados">
        <div class="count star">
          <img src="./img/star.svg" alt="star">
          <span class="countStar">0</span>
        </div>
        <div class="count view">
          <img src="./img/view.svg" alt="star">
          <span class="countView">0</span>
        </div>
          <div class="language">
            <span class="cor "></span>
            <span class="lang">${item.language}</span>
          </div>
        </div>
      </div>
    `

    projects.appendChild(gitCard)
    trocarCor()
  })
}

function trocarCor() {
  var lang = document.querySelector([".lang"])
  var la = lang.innerText
  var cor = document.querySelector(".cor")
  console.log(la)
  switch (la) {
    case "HTML":
      cor.classList.remove("cor")
      cor.classList.add("html")
      break
    case "JavaScript":
      cor.classList.remove("cor")
      cor.classList.add("js")
      break

    default:
      break
  }
}

getApiGithub()
