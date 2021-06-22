
let hands = ["Rock", "Paper", "Scissors"];
let handsLogic = new Map();
handsLogic.set("paper", "scissors");
handsLogic.set("rock", "paper");
handsLogic.set("scissors", "rock");


//game logic


function gameRound(player, computer) {

    player = player.toLowerCase();

    if(player == computer) {

        console.log("Draw, you both picked: " + player + ".");

        return "draw";
    }

    else if (player != handsLogic.get(computer)) {        

        console.log("You lose, the computer picked: " + computer + " and you picked: " + player + ".");
        return false;
    }

    else {

        console.log("You win, you picked: " + player + " and the computer picked: " + computer + ".");
        return true;
    }

}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;

    for (let i = 0; i < 5; i++) {

    playerSelection = prompt("Choose Rock Paper or Scissors");

    let currentWinner = gameRound(playerSelection, computerplay());

    if (currentWinner == "draw") {

        draw += 1;
    } 

    else if (currentWinner == true) {

        playerScore += 1;
    }

    else {

        computerScore += 1;
    }  

        
    }


    winnerCheck(playerScore, computerScore);

}


//helper functions


function computerplay() {
    
    return (hands[getRandom()].toLowerCase());
}


function getRandom() {

    return Math.floor(Math.random() * 3);
 
     
}


function winnerCheck(playerScore, computerScore) {

    if (playerScore > computerScore) {

        console.log("You won with " + playerScore);
     }

     else if (computerScore > playerScore) {

        console.log("The computer won with: " + computerScore);
     }

     else (console.log("Draw " + playerScore + " + " + computerScore) )   

}


game();






