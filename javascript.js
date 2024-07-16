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
    if ((choice.trim()).toLowerCase() === "rock") {
        return "rock";
    } else if ((choice.trim()).toLowerCase() === "paper") {
        return "paper";
    } else if ((choice.trim()).toLowerCase() === "scissors") {
        return "scissors";
    } else {
        alert("The word you entered was not recognized, please try again.");
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            ++computerScore;
            return alert(`You lose! Paper beats rock.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore;
            return alert(`You win! Rock beats scissors.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            ++humanScore;
            return alert(`You win! Paper beats rock.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            ++computerScore;
            return alert(`You lose! Scissors beats paper.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            ++computerScore;
            return alert(`You lose! Rock beats scissors.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore;
            return alert(`You win! Scissors beats paper.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else if (humanChoice === computerChoice) {
            return alert(`It's a tie!\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
        } else {
            return alert(`Make sure your choice is spelled correctly! \(\"scissors\" is hard\).`);
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        alert(`Congrats! You win!\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Sorry, you lose. Refresh the page to try again.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    } else {
        alert(`It's a draw! Refresh the page to try again.\n\nYour score: ${humanScore}\nComputer score: ${computerScore}`);
    }
}

playGame()