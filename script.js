alert("Man vs Machine. A fight to the death via 5 rounds of Rock, Paper, Scissors.")

const buttons = document.querySelectorAll("button");

var div = document.createElement('div');
div.setAttribute('class', 'output');

let pText = "";

const body = document.querySelector('body');
body.appendChild(div);


let rounds = 0;
function addRoundCount() {
    rounds++;
}


function computerPlay() {
    const outcomesArr = ["Rock", "Paper", "Scissors"];
    const selected = outcomesArr[Math.floor(Math.random() * outcomesArr.length)];
    return selected;
};


let playerScore = 0;
let computerScore = 0;
function startRound() {
    var playerSelection = this.className;
    var computerSelection = computerPlay();
    pS = playerSelection.toLowerCase();
    cS = computerSelection.toLowerCase();
    if (pS === cS) {
        pText = "It's a draw!";
        return 0;
    } else if ((pS === "rock" && cS === "scissors") || (pS === "paper" && cS === "rock") || (pS === "scissors" && cS === "paper")) {
        playerScore++;
        pText = "Congr@tulashions, you win this round!";
        return 1;
    } else {
        computerScore++;
        pText = "Oh no, you are a loser."
        return -1;
    }
}

function printResult() {
    let p = document.createElement('p');
    p.textContent = pText;
    div.appendChild(p);
}

function endGame() {
    if (rounds === 5) {
        console.log("Five stressful rounds of Rock, Paper, Scissors is over.");
        console.log(`You have won ${playerScore} round(s).`);
        console.log(`The computer has won ${computerScore} round(s).`);
        winStatus = (playerScore > computerScore);
        if (playerScore === computerScore) {
            endText = "Man and Machine fought bravely this day, only to end in a draw.";
        } else if (winStatus) {
            endText = "Man has fought valiantly and prevailed.";
        } else {
            endText = "Machines are the superior beings afterall...";
        }
        
        endTexts = ["Five stressful rounds of Rock, Paper, Scissors is over.",
                    `You have won ${playerScore} rounds.`,
                    `The computer has won ${computerScore} rounds.`,
                    endText]

        for(i=0; i < endTexts.length; i++) {
            let p = document.createElement('p');
            p.textContent = endTexts[i];
            div.appendChild(p);
        }
    }
}

buttons.forEach(button => button.addEventListener("click", startRound));
buttons.forEach(button => button.addEventListener("click", addRoundCount));
buttons.forEach(button => button.addEventListener("click", printResult));
buttons.forEach(button => button.addEventListener("click", endGame));