const cardValues = ["A", "B", "C", "D", "E", "F"];

const cardPairs = [...cardValues, ...cardValues];
console.log(cardPairs); //["A", "B", "C", "D", "E",
const stuffledPairs = stuffleArray(cardPairs)
const gameBoard = document.getElementById("game-board");
createGameBoard(stuffledPairs);

function stuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

    }
    return array;
}
function createGameBoard(cards) {
    cards.forEach((value, index) => {
        const card = document.createElement("div");
        card.classList.add("card", "hidden");
        card.dataset.index = index;
        card.innerText = value;
        card.addEventListener("click", revealCard);
        gameBoard.appendChild(card);

    });

}
let flippedCards = [];
let matchedPaired = 0;
function revealCard() {
    const selectedCard = this;


    if (selectedCard.classList.contains("hidden") && flippedCards.length < 2) {
        selectedCard.classList.remove("hidden");
        flippedCards.push(selectedCard);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const card1 = flippedCards[0]
    const card2 = flippedCards[1]
    if (card1.innerText === card2.innerText) {
        card1.removeEventListener("click");
        card2.removeEventListener("click");
        matchedPaired++;
    } else {
        card1.classList.add("hidden");
        card2.classList.add("hidden");
    }
}