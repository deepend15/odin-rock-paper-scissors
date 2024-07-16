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