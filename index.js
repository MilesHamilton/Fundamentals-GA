
// card array
const cards = ['queen', 'queen', 'king', 'king']
const cardsInPlay = []

// pushing the first card from the cards arr to cards in play
const cardOne = cards[0]
const playCardOne = cardsInPlay.push(cardOne)

// pushing the second card
const cardTwo = cards[2]
const playCardTwo = cardsInPlay.push(cardTwo)
// console.log("user flipped" + " " + cardsInPlay)

if (cardsInPlay.length=== 2) {
    console.log(cardsInPlay)
} if (cardsInPlay[0]===cardsInPlay[1]) {
    alert("you found a match!!")
} else {
    alert ("gg no re")
}
