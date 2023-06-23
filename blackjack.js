let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard] //array
let sum = firstCard + secondCard
let hasblackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

function startgame(){
    rendergame()
}

function rendergame(){
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
if(sum < 21){
//console.log("Do you want to draw a new card?")
 //hasblackjack = false
 message = "Do you want to draw a new card?"

} else if(sum === 21){
    //("Wohoo! You've got Blackjack!")
   message = "Wohoo! You've got Blackjack!"
} else if(sum > 21){
    //("You're out of the game!")
    message = "You're out of the game!"
//isAlive = false
 }

//console.log(hasblackjack)
//console.log(isAlive)
messageEl.textContent = message
sumEl.textContent += sum
//cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

}

function newcard(){
    console.log("Drawing a new card from the deck!")
    let card = 3
    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
}

//newcard()
//let education = ["SSC", "Intermediate", "Bachelor of Technology"]