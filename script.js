function computerPlay() {
    const outcomesArr = ["Rock", "Paper", "Scissors"];
    const selected = outcomesArr[Math.floor(Math.random() * outcomesArr.length)];
    return selected;
};

function startRound(playerSelection, computerSelection) {
    pS = playerSelection.toLowerCase();
    cS = computerSelection.toLowerCase();
    if (pS === cS) {
        console.log("It's a draw!");
        return 0;
    } else if ((pS === "rock" && cS === "scissors") || (pS === "paper" && cS === "rock") || (pS === "scissors" && cS === "paper")) {
        console.log("Congr@tulashions, you win this round!");
        return 1;
    } else {
        console.log("Oh no, you are a loser.")
        return -1;
    }
}

function game() {

    console.log("Let's play 5 rounds of Rock, Paper Scissors. \nIf you lose you die.");

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        const playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
        result = startRound(playerSelection, computerSelection);
        switch(result) {
            case 1:
                playerScore += 1;
                break;
            case -1:
                computerScore += 1;
            default:
                break;
        }
        console.log("The computer chose:" + computerSelection);
    }

    console.log(`You have won ${playerScore} rounds.`);
    console.log(`Computer has won ${computerScore} rounds.`);

}

game();