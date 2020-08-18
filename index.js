// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetBtn() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
    


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
     
    
    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
    
    if(player1Score >= 20) {
        message.textContent = "Player 1 Won!"
        showResetBtn()
        
        
    }else if(player2Score >= 20) {
        message.textContent = "Player 2 Won!"
        showResetBtn()
        
         }
    
  player1Turn = !player1Turn
     
 })
 
 resetBtn.addEventListener('click', function() {
        reset()
    })
 
 function reset(){   
            player1Score = 0
            player2Score = 0 
            player1Turn = true  
            resetBtn.style.display = 'none'
            rollBtn.style.display = "block"
            player1Dice.textContent = "-"
            player2Dice.textContent = "-"
            player1Scoreboard.textContent = 0
            player2Scoreboard.textContent = 0
            message.textContent = "Player 1 Turn"
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            }
            
