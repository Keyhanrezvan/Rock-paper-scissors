
let computerChoices = {
   0: "rock",
   1: "paper",
   2: "scissors"
}

function getComputerChoice(){

   let num = Math.floor(Math.random() * 3)
   let result = computerChoices[num]
   return result
}

let playerScore = 0
let computerScore =0

function playRound(playerSelection, computerSelection){

   let lowPlayer = playerSelection.toLowerCase()

   if (lowPlayer === computerSelection){
      return `Its a tie! You both chose ${lowPlayer}`
   } else if ((lowPlayer === 'rock' && computerSelection === 'scissors') || (lowPlayer === 'scissors' && computerSelection === 'paper') || (lowPlayer === 'paper' && computerSelection === 'rock')) {
      playerScore ++
      return `You win! ${lowPlayer} beats ${computerSelection}`
   } else {
      computerScore ++
      return `You lose! ${computerSelection} beats ${lowPlayer}`
   }
  
}

const playerSelection = "paper";


function game(){

 while (computerScore < 5 && playerScore < 5){
   
   console.log(playRound(playerSelection, getComputerChoice()))
   
 }

 if (computerScore === 5) {
   return "You lost the game to a computer!"
 } else if (computerScore === playerScore){
   return "Its a tie!"
 } else { return "You win the game!!"}

}

console.log(game())