const bracketTemplate = document.querySelector("#bracket-template")
const bracketContainer = document.getElementById("tree")
let bracketHeight = 150;
let playerCount = 8;
let colCount = Math.floor(Math.log(playerCount)/Math.log(2))
bracketContainer.style.gridTemplateColumns = `repeat(${colCount}, min-content)`

for (let i = colCount - 1; i >= 0; i--) {
  let bracketColumn = document.createElement("div")
  bracketColumn.setAttribute("id", `column-${i}`)
  bracketColumn.style.gridTemplateRows = `repeat(${2**i}, 1fr)`
  bracketColumn.classList.add("bracket-column")
  bracketContainer.appendChild(bracketColumn)

  for (let x = 0; x < 2**i; x++) {
    const newBracket = bracketTemplate.cloneNode(true)
    newBracket.removeAttribute("id")
    bracketColumn.appendChild(newBracket)
  }
}


