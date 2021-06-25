let hands = ["Rock", "Paper", "Scissors"];
let handsLogic = new Map();
handsLogic.set("paper", "scissors");
handsLogic.set("rock", "paper");
handsLogic.set("scissors", "rock");
let playerScore = 0;
let computerScore = 0;
let score = 0;


//game logic


function gameRound(player, computer) {

    player = player.toLowerCase();

    if (player == computer) {

        updateInfo("Draw, you both picked: " + player + ".");

        return "draw";
    } else if (player != handsLogic.get(computer)) {

        updateInfo("You lose, the computer picked: " + computer + " and you picked: " + player + ".");
        return false;
    } else {

        updateInfo("You win, you picked: " + player + " and the computer picked: " + computer + ".");
        return true;
    }

}

function game(playerSelection, computer) {

    if (playerScore >= 5 || computerScore >= 5) {

        resetScores();
        resetInfo();
    } else if (computerScore < 6 && playerScore < 6) {

        let currentWinner = gameRound(playerSelection, computer);

        if (currentWinner == "draw") {
            return;

        } else if (currentWinner == true) {

            playerScore += 1;
        } else {

            computerScore += 1;
        }

    }

    if (playerScore == 5 || computerScore == 5) {

        winnerCheck(playerScore, computerScore);


    }
}

//helper functions


function computerplay() {

    return (hands[getRandom()].toLowerCase());
}


function getRandom() {

    return Math.floor(Math.random() * 3);


}


function winnerCheck(playerScore, computerScore) {

    updateScores();

    if (playerScore > computerScore) {

        updateInfo("You won with " + playerScore);
    } else {

        updateInfo("The computer won with: " + computerScore);
    }

    gameOver();

}



//gui logic

let icon = document.querySelectorAll(".icon");
let playerScoreBox = document.querySelector("#currentScore");
let computerScoreBox = document.querySelector("#currentComputerScore");
let infoBox = document.querySelector("#info");
let gameOverCheck = false;
let boxes = [playerScoreBox,computerScoreBox, infoBox];


console.log(icon);

icon.forEach((icon1) => {

    icon1.addEventListener("click", iconClick);

});



function iconClick(e) {

    if(gameOverCheck === false) {

    console.log(e.target.id);
    game(e.target.id, computerplay());
    updateScores();

    }

}


function updateScores() {
     
    playerScoreBox.textContent = playerScore.toString();
    computerScoreBox.textContent = computerScore.toString();
}

function resetScores() {

    playerScore = 0;
    draw = 0;
    computerScore = 0;
    updateScores();
}


function updateInfo(message) {

    infoBox.classList.add("infobutton");
    infoBox.textContent = message;


}

function resetInfo() {

    infoBox.textContent = "Choose Rock, Paper or Scissors.";
}

function resetAll() {
    resetScores();
    resetInfo();
    gameOverCheck = false;
    infoBox.removeEventListener("click", resetAll);
    infoBox.classList.remove("infobutton");
}

function gameOver() {

    gameOverCheck = true;
    infoBox.textContent += ". Click me to play again.";
    infoBox.addEventListener("click", resetAll);

}

