function displayResults(playerWon) {
    if (playerWon === true) {
        playerWins++;
        return ("Player has " + playerWins + " wins. Computer has " + computerWins + " wins.")
    }
    else if (playerWon === false) {
        computerWins++;
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is a tie! Player has " + playerWins + " wins. Computer has " + computerWins + " wins.";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerWon = true;
        return "You win! Rock beats Scissors. " + displayResults(playerWon);
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerWon = true;
        return "You win! Paper beats Rock." + displayResults(playerWon);
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerWon = true;
        return "You win! Scissors beats Paper." + displayResults(playerWon);
    }
    else {
        playerWon = false;
        return ("You lose! " + computerSelection + " beats " + playerSelection + ". ") + displayResults(playerWon);
    }
}

function game() {
    
    let computerSelection = computerPlay();

    if (playerWins === computerWins) {
        console.log("Player Wins: " + playerWins);
        console.log("Computer Wins: " +  computerWins);
        console.log("It is a tie! Man has met his match with machine.")
    }
    else if (playerWins > computerWins) {
        console.log("Player Wins: " + playerWins);
        console.log("Computer Wins: " +  computerWins);
        console.log("You win! Take that Skynet!")
    }
    else if (playerWins < computerWins) {
        console.log("Player Wins: " + playerWins);
        console.log("Computer Wins: " +  computerWins);
        console.log("You lose! The rise of the machines has begun...")
    }
}

let playerWon = false;
let playerWins = 0;
let computerWins = 0;
game();