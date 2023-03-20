// Note: i learned how to build this game one year ago and this Youtube teacher was suggested by my teacher so i learned from it and kept it in my memory by heart.
// credit and link to it : https://www.youtube.com/watch?v=1yS-JV4fWqY

const buttons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const zombieScoreSpan = document.querySelector("[data-zombie-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const CHOICES = [
  {
    name: "rock",
    emoji: "🪨",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "🍁",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✂",
    beats: "paper",
  },
];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const selectionName = button.dataset.selection;
    const selection = CHOICES.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

const makeSelection = (selection) => {
  const zombieSelection = randomSelection();
  const youWinner = isWinner(selection, zombieSelection);
  const zombieWinner = isWinner(zombieSelection, selection);

  addSelectionResult(zombieSelection, zombieWinner);
  addSelectionResult(selection, youWinner);

  if (youWinner) {
    incrementScore(yourScoreSpan);
  }
  if (zombieWinner) {
    incrementScore(zombieScoreSpan);
  }
};

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) {
    div.classList.add("winner");
  }
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}