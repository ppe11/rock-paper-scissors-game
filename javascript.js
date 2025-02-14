// JavaScript file: script.js

document.querySelector(".buttons").setAttribute("style", "margin: 20px;");

document.querySelectorAll("button:not(.exit-button)").forEach(button => {
    button.setAttribute("style", "font-size: 20px; margin: 10px; padding: 10px 20px; cursor: pointer; border-radius: 15px; font-family: monospace");
});

const resultsDiv = document.getElementById("results");
resultsDiv.style.marginTop = "20px";
resultsDiv.style.fontSize = "18px";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random(); 

    if (randomNumber < 0.33) {
        return "rock"; // 33% chance for "rock"
    } else if (randomNumber < 0.66) {
        return "paper"; // 33% chance for "paper"
    } else {
        return "scissors"; // 33% chance for "scissors"
    }
}

function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return; 

    const computerChoice = getComputerChoice();
    let resultMessage = `You chose ${humanChoice}. Computer chose ${computerChoice}. `;
    
    if (humanChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultMessage += "You win this round!";
    } else {
        computerScore++;
        resultMessage += "Computer wins this round!";
    }
    
    updateResults(resultMessage);
}

function updateResults(message) {
    resultsDiv.innerHTML = `${message}<br>Score: You ${humanScore} - ${computerScore} Computer`;

    if (humanScore === 5) {
        resultsDiv.innerHTML += "<br><strong>Congratulations! You won the game!</strong>";
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += "<br><strong>The computer wins the game! Better luck next time!</strong>";
    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

document.querySelectorAll("button:not(.exit-button)").forEach(button => {
    button.addEventListener("mouseover", () => button.style.backgroundColor = "lightblue");
    button.addEventListener("mouseout", () => button.style.backgroundColor = "");
});

// Adding a reset button
const resetButton = document.getElementById("reset");
resetButton.setAttribute("style", "display: block; margin: 20px auto; padding: 10px 20px; font-size: 18px; cursor: pointer; border-radius: 15px; font-family: monospace")

resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.innerHTML = "Game has been reset. Choose Rock, Paper, or Scissors to start again!";
});
