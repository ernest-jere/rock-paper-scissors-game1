// function to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
function computerPlay () {
    const MAX = 3; // total number of objects
    const MIN = 1; // number of items to be returned at a time
    let selectedItem;
    // let the computer select an item
    selectedItem = Math.floor(Math.random() * (MAX - MIN + 1) ) + MIN;
    // determine what the computer has selected
    let play; //keep computer selection
    switch (selectedItem){
        case 1: 
        play = "Rock";
        break;
        case 2: 
        play = "Paper";
        break;
        case 3: 
        play = "Scissors";      
    }
    return play;
}

// function that plays a single round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection ) {
    // declares the winner of the round.
    if (playerSelection == computerSelection) {
        return "win" 
    } else {
        return "lose" 
    } //end end if
} //function

// function to play a 5 round game that keeps score and reports a winner or loser
function game() {
    const choice = ["rock", "paper", "scissors"]; // choice array
    let playerSelection = "";
    let computerSelection = "";
    let score = "";
    let yourCount = 0;
    let computerCount = 0;
    let count = 0;
    //loop to count rounds
    for(let round = 0; round < 5; round++) { 
        count = round;        
        // prompt for player selection
        playerSelection = prompt(`Select: Rock, Paper or Scissors (Round ${count + 1})` ).toLowerCase();
        let roundPlayed = false; // to check if the the round is played or not
        //loop to check user input
        computerSelection = computerPlay().toLowerCase();
         while(choice.includes(playerSelection)){
            //call playRoumd function to determine the winner
            score = playRound(playerSelection, computerSelection); 
            if (score == "win") {
                yourCount++;
                console.log(`You win!`);
            } else {
                computerCount++;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            } 
            roundPlayed = true; 
            break;
        } //end while
        if(roundPlayed == false) {
            console.log(" Wrong input! Round not played.");
            //roundPlayed = true;
        } // end if
    } //end for
    if ((computerCount + yourCount) < (count+1)){ // check if 5 games are played
        console.log(`Wrong input! Game cancelled. ${yourCount + computerCount} Rounds played`);
    } else if (yourCount > computerCount) {
        console.log(`You win! Score: ${yourCount} to ${computerCount}`);
    } else {
        console.log(`You Lose! Score: ${computerCount} to ${yourCount}`);     
    } //end if
} //end function
game(); //play game
