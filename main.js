const outputText = document.createElement("div");
outputText.textContent = "Select to start the game:";
outputText.id = "outputText";
const scriptElement = document.querySelector("script");
scriptElement.parentNode.insertBefore(outputText, scriptElement);

const result = document.createElement("div");
result.textContent = "First to score 5 points wins the game!";
result.id = "result";
outputText.parentNode.insertBefore(result, outputText);

let buttons = document.getElementsByClassName("myButton");

let computerScore = 0, playerScore = 0;

function computer() {
    computerSelection = Math.floor(Math.random() * 3);

    if(computerSelection === 0){
        computerSelection = "rock";
    }
    else if(computerSelection === 1){
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    let result;

    if (
        (playerSelection === "scissors" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper")
    ) {
        outputText.textContent = (`Draw! (${playerSelection} = ${computerSelection})`);
        result = 1;
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        outputText.textContent = (`Player won! ${playerSelection} beats ${computerSelection}!`);
        result = 2;
    } else {
        outputText.textContent = (`Computer won! ${computerSelection} beats ${playerSelection}!`);
        result = 0;
    }

    return result;
}

function game(playerSelection, computerSelection) {
    let round;

    
    round = playRound(playerSelection, computerSelection);
        
    if (round === 2) {
        playerScore += 1;
    } else if (round === 0) {
        computerScore += 1;
    }

    result.textContent = `Final scores: Player score: ${playerScore} and Computer score: ${computerScore}`;

    if(playerScore === 5){
        playerScore = 0;
        computerScore = 0;
        result.textContent = "Player Won!";
    } else if (computerScore === 5){
        playerScore = 0;
        computerScore = 0;
        result.textContent = "Computer Won!";
    }
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {

        let playerSelection = this.id;
        let computerSelection = computer();

        game(playerSelection, computerSelection);


    });
}

