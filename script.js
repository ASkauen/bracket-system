const bracketTemplate = document.querySelector("#bracket-template")
const bracketContainer = document.getElementById("bracket")
let playerCount = 16;
let colCount = Math.floor(Math.log(playerCount)/Math.log(2))
bracketContainer.style.gridTemplateColumns = `repeat(${colCount}, min-content)`

for (let i = colCount - 1; i >= 0; i--) {
  let bracketColumn = document.createElement("div")
  bracketColumn.setAttribute("id", `column-${i}`)
  bracketColumn.style.margin = "0"
  bracketColumn.style.gridTemplateRows = `repeat(${2**i}, 1fr)`
  bracketColumn.classList.add("bracket-column")
  bracketContainer.appendChild(bracketColumn)
  for (let x = 0; x < 2**i; x++) {
    const newBracket = bracketTemplate.cloneNode(true)
    newBracket.querySelector(".bracket-lines")
    newBracket.removeAttribute("id")
    newBracket.classList.add("module")
    bracketColumn.appendChild(newBracket)
  }
}