
let hands = ["Rock", "Paper", "Scissors"];
let handsLogic = new Map();
handsLogic.set("paper", "scissors");
handsLogic.set("rock", "paper");
handsLogic.set("scissors", "rock");


function computerplay() {
    
    return (hands[getRandom()].toLowerCase()) + "yooo";

}




function gameRound(player, computer) {

    if(player == computer) {

        console.log("draw")
    }



    else if (player != handsLogic.get(computer)) {

        

        console.log("you lose" + computer + "beats" + player);


    }

    else {

        console.log("you win" + player + "beats" + computer);
    }


    console.log(handsLogic.get(player))
}

gameRound("paper", "scissors");


   




