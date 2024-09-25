console.log("Hello World!")

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