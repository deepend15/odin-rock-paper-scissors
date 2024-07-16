let humanScore = 0;

let computerScore = 0;

function getComputerChoice() {
    let calc = Math.random();
    if (calc >= 0 && calc < 0.33) {
        return "rock";
    } else if (calc >= 0.33 && calc < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors!");
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        return console.log("You lose! Paper beats rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        return console.log("You win! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return console.log("You win! Paper beats rock.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore;
        return console.log("You lose! Scissors beats paper.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        return console.log("You lose! Rock beats scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return console.log("You win! Scissors beats paper.");
    } else {
        return console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);