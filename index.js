
// card array
const cards = ['queen', 'queen', 'king', 'king']
const cardsInPlay = []

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId])


if (cardsInPlay.length=== 2) {
} if (cardsInPlay[0]===cardsInPlay[1]) {
    alert("you found a match!!")
} else {
    alert ("gg no re")
    
}
console.log(checkForMatch())
console.log("User Flipped" + " "+ cards[cardId])
};
console.log(flipCard(1))

