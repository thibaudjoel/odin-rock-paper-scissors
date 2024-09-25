let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber === 0 && "rock" || randomNumber === 1 && "paper" || randomNumber === 2 && "scissors";
}

function getHumanChoice() {
    let humanInput = prompt("Enter 'Rock', 'Paper' or 'Scissors':").toLowerCase();
    while (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors") {
        humanInput = prompt("This was not a valid choice. Please enter 'Rock', 'Paper' or 'Scissors':")
    }
    return humanInput;
}

function playRound(humanChoice, computerChoice) {
    let winner = null;
    if (humanChoice == computerChoice) {
        console.log("Draw! You both chose " + humanChoice[0].toUpperCase() + humanChoice.slice(1) + ".");
    }
    else if (humanChoice == "rock") {
        if(computerChoice == "scissors") {
            winner = "human";
            console.log("You win! Rock beats scissors!");
        }
        else {
            winner = "computer";
            console.log("You lose! Rock looses to paper!");
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            winner = "human";
            console.log("You win! Paper beats rock!");
        }
        else {
            winner = "computer";
            console.log("You loose! Paper looses to scissors!");
        }
    }
    else {
        if (computerChoice == "paper") {
            winner = "human";
            console.log("You win! Scissors beats paper!")
        }
        else {
            winner = "computer";
            console.log("You loose! Scissor looses to rock!");
        }
    }
    updateScore(winner);
}

function updateScore(winner) {
    if (winner === null) {
        return;
    }
    else if (winner == "human") {
        humanScore++;
    }
    else {
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    printResult();
}

function printResult() {
    if (humanScore > computerScore) {
        console.log(`You win ${humanScore} - ${computerScore} against the computer.`)
    }
    else if (humanScore == computerScore) {
        console.log(`It's a draw! The final score is ${humanScore} - ${computerScore}`)
    }
    else {
        console.log(`You loose ${humanScore} - ${computerScore} against the computer.`)
    }
}

playGame();
