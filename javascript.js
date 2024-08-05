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

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

const results = document.createElement("div");
const score = document.createElement("div");
results.setAttribute('style', 'white-space: pre;');
score.setAttribute('style', 'white-space: pre;');

const body = document.querySelector("body");

body.appendChild(results);
body.appendChild(score);

function playRound(e) {
    let playerSelection = e.target.innerText.toLowerCase();
    let computerChoice = getComputerChoice();

    if (playerSelection === "rock" && computerChoice === "paper") {
        ++computerScore;
        results.textContent = `Computer choice: paper\r\n\r\nYou lose! Paper beats rock.\r\n\r\n`;
    } else if (playerSelection === "rock" && computerChoice === "scissors") {
        ++humanScore;
        results.textContent = `Computer choice: scissors\r\n\r\nYou win! Rock beats scissors.\r\n\r\n`;
    } else if (playerSelection === "paper" && computerChoice === "rock") {
        ++humanScore;
        results.textContent = `Computer choice: rock\r\n\r\nYou win! Paper beats rock.\r\n\r\n`;
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
        ++computerScore;
        results.textContent = `Computer choice: scissors\r\n\r\nYou lose! Scissors beats paper.\r\n\r\n`;
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
        ++computerScore;
        results.textContent = `Computer choice: rock\r\n\r\nYou lose! Rock beats scissors.\r\n\r\n`;
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
        ++humanScore;
        results.textContent = `Computer choice: paper\r\n\r\nYou win! Scissors beats paper.\r\n\r\n`;
    } else if (playerSelection === computerChoice) {
        results.textContent = `Computer choice: ${computerChoice}\r\n\r\nIt's a tie!\r\n\r\n`;
    }

    score.textContent = `Your score: ${humanScore}\r\nComputer score: ${computerScore}`;

    // end the game at 5
    
    if (humanScore === 5) {
        const playerWins = document.createElement("div");
        playerWins.setAttribute('style', 'white-space: pre;');
        playerWins.textContent = `\r\nGAME OVER\r\n\r\nCongrats! You win! Refresh to play again.`;
        body.appendChild(playerWins);
        buttons.forEach((button) => {
            button.removeEventListener("click", playRound);
        })
    } else if (computerScore === 5) {
        const computerWins = document.createElement("div");
        computerWins.setAttribute('style', 'white-space: pre;');
        computerWins.textContent = `\r\nGAME OVER\r\n\r\nSorry, you lose. Refresh to try again.`;
        body.appendChild(computerWins);
        buttons.forEach((button) => {
            button.removeEventListener("click", playRound);
        })
    };
}

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
})