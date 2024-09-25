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
    if (humanChoice == computerChoice) {
        console.log("Draw! You both chose" + humanChoice[0].toUpperCase() + humanChoice.slice(1));
    }
    else if (humanChoice == "rock") {
        if(computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors!");
        }
        else {
            computerScore++;
            console.log("You lose! Rock looses to paper!");
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats rock!");
        }
        else {
            computerScore++;
            console.log("You loose! Paper looses to scissors!");
        }
    }
    else {
        if (computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper!")
        }
        else {
            computerScore++;
            console.log("You loose! Scissor looses to rock!");
        }
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);