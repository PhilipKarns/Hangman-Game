//global variables
//words
var destinations = ["FLORIDA", "THAILAND", "SONOMA", "LONDON", "ICELAND"];
//random selection of new words at game start
var newWord = destinations[Math.floor(Math.random()*destinations.length)];
//each new word goes in this array at start of game
var answerArray = [];

for (i = 0; i < newWord.length; i++) {
	answerArray[i]="_";
	console.log(answerArray);
}

//create the function for the keystroke entered by the user
document.onkeypress = function() {
	var userSelection = String.fromCharCode(event.keyCode).toUpperCase();
	console.log(userSelection);
}
//create a for loop of the counter that starts at 12 and decreases with every selection

//