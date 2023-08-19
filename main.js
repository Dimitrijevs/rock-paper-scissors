function playRound(playerSelection, computerSelection) {
    let result;

    if (
        (playerSelection === "scissors" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper")
    ) {
        console.log(`Draw! (${playerSelection} = ${computerSelection})`);
        result = 1;
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        console.log(`Player won! ${playerSelection} beats ${computerSelection}!`);
        result = 2;
    } else {
        console.log(`Computer won! ${computerSelection} beats ${playerSelection}!`);
        result = 0;
    }

    return result;
}


function player() {
    let playerSelection;
    while (true) {
        playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (["rock", "paper", "scissors"].includes(playerSelection)) {
            break;
        }
    }

    return playerSelection;
}


function computer() {
    let computerSelection = Math.floor(Math.random() * 3);

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

function game() {
    let computerScore = 0, playerScore = 0, round;

    for (let i = 0; i < 5; i++) {
        round = playRound(player(), computer());
        
        if (round === 1) {
            playerScore += 1;
        } else if (round === 0) {
            computerScore += 1;
        }
    }
    
    console.log("Final scores:", playerScore, computerScore);
}

game();
