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
    console.log(selection)
}

function randomSelection() {
    const randomIndex = Math.random() * CHOICES.length
}