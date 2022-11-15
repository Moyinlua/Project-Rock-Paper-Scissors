let choices = ['Rock', 'Paper', 'Scissors'];


function getComputerChoice (){
    i = Math.floor(Math.random()*choices.length);
    let computerSelection = choices[i];
    return computerSelection.toLowerCase();
}
//let comSelect = getComputerChoice()
//let computerSelection = comSelect.toLowerCase()

//console.log(getComputerChoice())
let losePbR = 'You Lose! Paper beats Rock'
let winPbR = 'You Win! Paper beats Rock'
let loseSbP = 'You Lose! Scissors beat Paper'
let winSbP = 'You win! Scissors beat Paper'
let loseRbS = 'You Lose! Rock beats Scissors'
let winRbS = 'You Win! Rock beats Scissors'

function playRound(playerSelection, computerSelection){
    if ((playerSelection === 'rock') && (computerSelection === 'paper')){
        return losePbR;
    }else if((playerSelection === 'paper') && (computerSelection === 'rock')){
        return winPbR;
    }else if((playerSelection === 'paper') && (computerSelection === 'scissors')){
        return loseSbP;
    }else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
        return winSbP;
    }else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
        return loseRbS;
    }else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
        return winRbS;
    }else { return "it's a tie"}
}



//console.log(playRound(playerSelection, computerSelection))
//console.log(`Computer selects ${comSelect}`)

function game(){
    let count = [];
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('enter Rock, Paper or Scissors: ', '').toLowerCase();
        let computerSelection;
        computerSelection
        count[i] = playRound(playerSelection,getComputerChoice());
        
        
    }
    console.log(count);
}

console.log(fiveRoundGame = game())