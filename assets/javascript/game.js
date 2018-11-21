var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
	'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function userGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser;
}

countGuessesLeft();

var restart = function () {
	guessesLeft = 9;
	letterUser = [];
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function (event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	userGuesses();

	if (userGuess === computerGuess) {
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	}
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		restart();
	}
};
