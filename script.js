const buttons= document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]")
const CHOICES = [
{
    name:"rock",
    emoji: "🪨",
    beats: "scissors"
},
{
    name:"paper",
    emoji: "🍁",
    beats: "rock"
},
{
    name:"scissors",
    emoji: "✂",
    beats: "paper"
}
]


buttons.forEach((button)=>{
button.addEventListener("click",(e)=>{
const selectionName = button.dataset.selection
const selection = CHOICES.find(selection => selection.name === selectionName)
makeSelection(selection)
})
})

const makeSelection = (selection)=>{
    const zombieSelection = randomSelection()
    const youWinner = isWinner(selection,zombieSelection)
    const zombieWinner = isWinner(zombieSelection,selection)

    addSelectionResult(zombieSelection,zombieWinner)
    addSelectionResult(selection,youWinner)
}

function addSelectionResult(selection,winner){
    const div = document.createElement("div")
    div.innerText(selection.emoji)
    div.classList.add("result-selection")
    if(winner) {
        div.classList.add("winner")
    }
finalColumn.after(div)
}

function isWinner(selection,opponentSelection) {
return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}