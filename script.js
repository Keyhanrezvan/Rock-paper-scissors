
let computerChoices = {
   0: "rock",
   1: "paper",
   2: "scissors"
}

function getComputerChoice(){

   let num = Math.floor(Math.random() * 3)
   let result = computerChoices[num]
console.log(result)
   return result

}

function playRound(playerSelection, computerSelection){

   let lowPlayer = playerSelection.toLowerCase()

   if (lowPlayer === computerSelection){
      return `Its a tie! You both chose ${lowPlayer}`
   } else if ((lowPlayer === 'rock' && computerSelection === 'scissors') || (lowPlayer === 'scissors' && computerSelection === 'paper') || (lowPlayer === 'paper' && computerSelection === 'rock')) {
      return `You win! ${lowPlayer} beats ${computerSelection}`
   } else {
      return `You lose! ${computerSelection} beats ${lowPlayer}`
   }
}


const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));