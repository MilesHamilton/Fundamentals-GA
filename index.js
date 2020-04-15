
// card array
const cards = [
    {
    rank: 'queen',
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"

    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }];
    
const cardsInPlay = []

function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        const cardElement = document.createElement('img')
        cardElement.setAttribute('src', "images/back.png")
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        const gameBoard = document.getElementById('gameBoard')
        gameBoard.appendChild(cardElement)
    };
};


// creating the events once the cards are flipped
function flipCard (){
    const cardId = this.getAttribute('data-id')
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank)

if (cardsInPlay.length=== 2) {
    if (cardsInPlay[0]===cardsInPlay[1]) {
    alert("you found a match!!")
} else {
    alert ("Wrong, sorry")
    }};
    console.log(cards[cardId].suit)
    console.log(cards[cardId].cardImage)
console.log("User Flipped" + " "+ cards[cardId].rank)
};
// add reset button

function resetBoard () {
window.localStorage.clear();
window.location.reload(false); 
};

// // displaying win or lose
// function checkForMatch() {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         console.log("You found a match!");
//       } else {
//         console.log("Sorry, try again.");
//       }
//     };

// using DOM to set the initial board 

createBoard()
