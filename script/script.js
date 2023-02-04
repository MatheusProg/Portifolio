function trocarCor() {
  document.querySelectorAll(".tech").forEach((tech, i) => {
    const classe = tech.textContent === "HTML" ? "html" : "js"
    document.querySelectorAll(".cor")[i].classList.replace("cor", classe)
  })
}

// card.forEach(function (cards) {
//   console.log(cards)
// })

//
