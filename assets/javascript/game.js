


//variables for wins, losses, guesses left so far, and guesses array
var wins = 0;
var losses = 0;
var guessesLeftSoFar = 9;
var guessesArray = [];

//variables for elements inside index
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-sofar")
var userChoice = document.getElementById("user-choice");
var directions = document.getElementById("directions");


//the variable to hold the choices that the computer can choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

//function to reset the guesses so far counter when a win or a lose occurs.
function reset() {
    guessesLeftSoFar = 9;
    guessesArray = [];
}



//my function for the event when the user presses a key
document.onkeyup = function(event) {
    
    var userGuess = event.key.toLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    
    if (userGuess === computerGuess) {
        wins++;
        alert(userGuess.toUpperCase() + " is correct!.");
        reset();
    } else if (userGuess !== computerGuess) {
        guessesLeftSoFar--;
        guessesArray.push(userGuess);
        document.querySelector("#guesses-sofar").innerHTML = guessesArray;
    } if (guessesLeftSoFar === 0) {
        losses++;
        reset();
    }


    //these manipulate the html elements and adds all the information on to the page.
    directions.textContent = "";

    userChoice.textContent = "You chose: " + userGuess.toUpperCase();
    guessesLeft.textContent = "Guesses left: " + guessesLeftSoFar;
    guessesSoFar.textContent = "Guesses so far: " + guessesArray;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    

}

