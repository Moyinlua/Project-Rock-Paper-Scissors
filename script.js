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
    return count;
}

console.log(fiveRoundGame = game())


function scoreBoard(){
    let scoreBoard = [];
    for (let i = 0; i < fiveRoundGame.length; i++){
        if ((fiveRoundGame[i] === losePbR) || (fiveRoundGame[i] === loseRbS) || (fiveRoundGame[i] === loseSbP)) { 
            scoreBoard[i] = 'lose';
        } else if ((fiveRoundGame[i] === winPbR) || (fiveRoundGame[i] === winRbS) || (fiveRoundGame[i] === winSbP)) {
            scoreBoard[i] = 'win';
        } else {scoreBoard[i] = 'tie';}                   
    }
    
    return scoreBoard;
}

console.log(scoreBoard());

let winCount = scoreBoard().filter(x => x=='win').length
let loseCount = scoreBoard().filter(x => x=='lose').length

if (winCount > loseCount){
    console.log('Victory');
}else if (winCount < loseCount){
    console.log('Better luck next time');
}else console.log('A Tie');

