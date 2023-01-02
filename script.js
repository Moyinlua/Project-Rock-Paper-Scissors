let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice (){
    i = Math.floor(Math.random()*choices.length);
    let computerSelection = choices[i];
    return computerSelection = computerSelection.toLowerCase();
}

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

const body = document.getElementById('mainBody');

const choiceList = document.createElement('div');
body.appendChild(choiceList);

const btnRock = document.createElement('button');
btnRock.appendChild(document.createTextNode('ROCK'));
btnRock.setAttribute('class', 'userChoice');

const btnPaper = document.createElement('button');
btnPaper.appendChild(document.createTextNode('PAPER'));
btnPaper.setAttribute('class', 'userChoice');

const btnScissors = document.createElement('button');
btnScissors.appendChild(document.createTextNode('SCISSORS'));
btnScissors.setAttribute('class', 'userChoice')

let aR = [];

let outcomeAnyAtCount5 = document.createElement('h3');
outcomeAnyAtCount5.id = 'first-to-5';

let scoreSummary = document.createElement('h4');

const report = document.createElement('div');

function scoreDisplay (){

    //const report = document.createElement('div');
    report.textContent = result;
    report.className = 'report'
    console.log(result, 'bululluu')
    body.appendChild(report);

    var scoreList = document.getElementsByClassName('report')

    //console.log(scoreList)

    //console.log(Array.from(scoreList));

    function scoreArray(){
        let len = Array.from(scoreList).length - 1;
        aR.push(Array.from(scoreList)[len].textContent);
        return aR;
    }
    console.log(scoreArray());

    let winCount = aR.filter(x => x=='player wins').length;
    let lossCount = aR.filter(x => x=='comp wins').length;
    console.log(winCount, lossCount, 'bubu');

    //let scoreSummary = document.createElement('h4');
    scoreSummary.textContent =`Player ${winCount} | ${lossCount} Computer`;
    body.appendChild(scoreSummary);

    var verdict;
    function outcome5 () {
        if ((winCount == 5) && (lossCount < 5)){
            verdict = "PLAYER WINS";
        }
        else if ((winCount < 5) && (lossCount == 5)){
            verdict = "COMPUTER WINS";
        } else {
            verdict = '';
        }
        return verdict;
    }
    
    //console.log(outcome5(), 'bulaba');
    outcomeAnyAtCount5.textContent = outcome5();

    body.appendChild(outcomeAnyAtCount5);
}

btnPaper.addEventListener('click', function () {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice ();
    if ((playerSelection) && (computerSelection === 'paper')){
       result = 'tie'};
    if ((playerSelection) && (computerSelection === 'scissors')) {
       result = 'comp wins'};       //loss, scissors cut paper
    if ((playerSelection) && (computerSelection === 'rock')) {
       result = 'player wins'};     //win, paper wraps rock   
   
    scoreDisplay ();

})

btnRock.addEventListener('click', function () {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice ();
    if ((playerSelection) && (computerSelection === 'paper')){
       result = 'comp wins'};       //loss, paper wraps rock
    if ((playerSelection) && (computerSelection === 'scissors')) {
       result = 'player wins'};     //win, rock crushes scissors
    if ((playerSelection) && (computerSelection === 'rock')) {
       result = 'tie'};   
    
    scoreDisplay ();
})

btnScissors.addEventListener('click', function () {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice ();
    if ((playerSelection) && (computerSelection === 'paper')){
       result = 'player wins'};      //win, scissors cuts paper
    if ((playerSelection) && (computerSelection === 'scissors')) {
       result = 'tie'};
    if ((playerSelection) && (computerSelection === 'rock')) {
       result = 'comp wins'};        //loss, rock crushes scissors  
    
    scoreDisplay ();
})

choiceList.appendChild(btnRock);

choiceList.appendChild(btnPaper);

choiceList.appendChild(btnScissors);


