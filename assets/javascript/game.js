


//variables for wins, losses, guesses so far, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeftSoFar = 9;
var guessesArray = [];

//variables for elements inside index
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-sofar");
var userChoice = document.getElementById("user-choice");
var directions = document.getElementById("directions");


//the variable to hold the choices that the computer can choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

function reset() {
    guessesLeftSoFar = 9;
}

//my function for the event
document.onkeyup = function(event) {

    guessesArray.push(userGuess);
    
    var userGuess = event.key.toLowerCase();

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        alert("You Guessed Right!!");
        reset();
    } else if (userGuess !== computerGuess) {
        guessesLeftSoFar--;
    } if (guessesLeftSoFar === 0) {
        losses++;
        reset();
    }

    directions.textContent = "";

    userChoice.textContent = "You chose: " + userGuess;
    guessesLeft.textContent = "Guesses left: " + guessesLeftSoFar;
    guessesSoFar.textContent = "Guesses so far: " + guessesArray;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    

}

