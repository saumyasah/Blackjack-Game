let firstCard=10
let secondCard=4
let cards=[firstCard, secondCard]
let sum=firstCard+secondCard
let hasBlackJack=false
let isAlive=true
let message=" "
let messageEL=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEL=document.getElementById("card-el")
console.log(sum)
function startGame()
{
    renderGame()
}
function renderGame()
{
    cardEL.textContent="Card: "+cards[0]+" "+cards[1]
    sumEl.textContent="Sum: "+sum
        if(sum<21)
    {
        message="Do you want to draw a new card?"
    }
    else if(sum==21)
    {
        message="You've got Blackjack"
        hasBlackJack=true
    }
    else
    {
        message="You're out of the game!"
        isAlive=false
    }
    messageEL.textContent=message
    console.log(message)
}
function newCard()
{
    let card=7
    sum+=card
    renderGame()
}
