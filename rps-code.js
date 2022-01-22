const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');
const results = document.querySelector('#results');
const finalResults = document.querySelector('#final-results');

let playerWon = false;
let gameOver = false;
let playerWins = 0;
let computerWins = 0;
let roundCount = 0;

finalResults.setAttribute('style', 'white-space:pre;');

game();

function updateScores(playerWon) {
    if (playerWon) {
        playerWins++;
    }
    else {
        computerWins++;
    }
}

function displayResults(playerWon) {
    if (playerWon === true) {
        return ("Player has " + playerWins + " wins. Computer has " + computerWins + " wins.")
    }
    else if (playerWon === false) {
        return ("Player has " + playerWins + " wins. Computer has " + computerWins + " wins.")
    }
}

function computerPlay() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return "Rock";
    }
    else if (randomNum === 2) {
        return "Paper";
    }
    else if (randomNum === 3) {
        return "Scissors";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    roundCount++;
    if (playerSelection === computerSelection) {
        return "Round " + roundCount + ": " + "Both chose " + playerSelection + ". It is a tie! Player has " + playerWins + " wins. Computer has " + computerWins + " wins.";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerWon = true;
        updateScores(playerWon);
        if (playerWins === 5) {
            endGame();
        }
        return "Round " + roundCount + ": " + "You win! Rock beats Scissors. " + displayResults(playerWon);
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerWon = true;
        updateScores(playerWon);
        if (playerWins === 5) {
            endGame();
        }
        return "Round " + roundCount + ": " + "You win! Paper beats Rock. " + displayResults(playerWon);

    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerWon = true;
        updateScores(playerWon);
        if (playerWins === 5) {
            endGame();
        }
        return "Round " + roundCount + ": " + "You win! Scissors beats Paper. " + displayResults(playerWon);
    }
    else {
        playerWon = false;
        updateScores(playerWon);
        if (computerWins === 5) {
            endGame();
        }
        return ("Round " + roundCount + ": " + "You lose! " + computerSelection + " beats " + playerSelection + ". ") + displayResults(playerWon);
    }
}

function endGame () {
    disableButtons();
    if (playerWins === computerWins) {
        return finalResults.textContent = "Player Wins: " + playerWins + "\r\nComputer Wins: " +  
                computerWins + "\r\nIt is a tie! Man has met his match with machine.";
    }
    else if (playerWins > computerWins) {
        return finalResults.textContent = "Player Wins: " + playerWins + "\r\nComputer Wins: " +  
                computerWins + "\r\nYou win! Take that Skynet!";
    }
    else if (playerWins < computerWins) {
        return finalResults.textContent = "Player Wins: " + playerWins + "\r\nComputer Wins: " +  
                computerWins + "\r\nYou lose! The rise of the machines has begun...";
    }
}

function disableButtons() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
}

function game() {
    btnRock.addEventListener('click', () => {
        results.textContent = playRound('Rock');
    });
    btnPaper.addEventListener('click', () => {
        results.textContent = playRound('Paper');
    });
    btnScissors.addEventListener('click', () => {
        results.textContent = playRound('Scissors');
    });
}