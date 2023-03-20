const buttons= document.querySelectorAll("[data-selection]");
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
    console.log(zombieSelection)
}

function isWinner(selection,opponentSelection) {
return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * CHOICES.length)
    return CHOICES[randomIndex]
}