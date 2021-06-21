console.log("hello wddoo");
let hands = ["Rock", "Paper", "Scissors"];
let handsLogic = new Map();



function computerplay() {
    
    return (hands[getRandom()].toLowerCase()) + "yooo";

    /*for (i = 0; i < hands.length; i++) {

        console.log(hands[i]);
        console.log(getRandom());
    }

    */  
}


function gameRound(playerselectiom, computerselection) {

    switch(true) {

        case(playerselectiom == computerselection):
        console.log("draw")
        break;

        case(playerselectiom == "rock" || computerselection == "rock"):

       

        if (rockCheck(computerselection)) {

            console.log(playerselectiom + " beats" + computerselection + " You win")
        }

        else {

            console.log("reached")

            console.log(computerselection + " beats" + playerselectiom + "you lose")
        }

        break;






         case(playerselectiom == "paper"):



        if (paperCheck(computerselection)) {

            console.log(playerselectiom + " beats" + computerselection + " You win")
        }

        else {

            console.log("reached")

            console.log(computerselection + " beats" + playerselectiom + "you lose")
        }

         break;


         case (computerselection == "scissors"):




        if (scissorsCheck(computerselection)) {

            console.log(playerselectiom + " beats" + computerselection + " You win")
        }

        else {

            console.log("reached")

            console.log(computerselection + " beats" + playerselectiom + "you lose")
        }

         break;


         case (playerselectiom == "scissors"):

         break;


         case (computerselection == "scissors"):

         break;



        
        
       
    }
}

function getRandom() {

    return Math.floor((Math.random()* 3));
}


function giveWinner(handChoice) {

    



}


function rockCheck(playerselectiom) {

    if (playerselectiom == "paper") {

        return false;
    }

    else if (playerselectiom == "scissors") {

        return true;
    }


}

function paperCheck(selection) {

    if (selection == "rock") {

        return true;
    }

    else {

        return false;
    }
}


function scissorsCheck(selection) {

    if (selection == "paper") {

        return true;
    }

    else {

        return false;
    }
}




console.log(gameRound("paper", "scissors"));