let cards = new Array;
let sum = new Number;
let hasBlackJack = false
let isAlive = true
let message = ""
const messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.getElementById("cards-el")
const newCardEl = document.getElementById("newcard-el")
const startEl = document.getElementById("start-el")


function startGame() {
    cards = new Array;
    sum = new Number;
    cardsEl.textContent = "Cards: ";
    sumEl.textContent = "Sum: ";
    isAlive = true;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === false || hasBlackJack === true) {
        return
    }
    let card = Math.floor((Math.random() * 13) + 1);
    if (card === 1) {
        cards.push("ACE");
        card = 11;
    } else if (card === 11) {
        cards.push("JOCKER");
        card = 10;
    } else if (card === 12) {
        cards.push("QUEEN");
        card = 10;
    } else if (card === 13) {
        card = 10;
        cards.push("KING");
    }
    else {
        cards.push(card);
    }
    sum += card;
    renderGame();
}
