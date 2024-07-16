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

