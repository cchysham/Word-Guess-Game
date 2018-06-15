


var words = ["mole", "kitten", "peccary", "colt", "mink", "monkey", "iguana", "deer", "walrus", "hedgehog", "chipmunk", "whale", "coyote", "porcupine", "mandrill", "rooster", "canary", "hog", "lion", "goat", "gorilla", "mouse", "ibex", "chicken", "ferret", "alpaca", "ram", "frog", "bison", "sloth", "panda", "tapir", "tortoise", "badger", "baboon", "octopus", "ocelot", "jaguar", "hare", "alligator", "raven", "crow", "moose", "snake", "parrot", "bull", "capybara", "okapi", "eagle", "donkey", "beetle", "lynx", "jackal", "kangaroo", "koala", "bunny", "groundhog", "cat", "crab", "squirrel", "wolverine", "elephant", "ox", "owl", "doe", "shrew", "porpoise", "dromedary", "rat", "seal", "komododragon", "opossum", "sheep", "lizard", "zebra", "weasel", "bumblebee", "ape", "puppy", "horse", "giraffe", "wolf", "orangutan", "armadillo", "gazelle", "iguana", "beaver", "tiger", "otter", "platypus", "pig", "panther", "crocodile", "lamb", "boar", "rabbit", "cheetah", "orca", "raccoon", "mustang"];
var chosenWord = words[Math.floor(Math.random() * words.length)];
var wrongGuesses = [];
var correctGuesses = [];
var guessesRemaining = 10;
var wins = 0;
var losses = 0;
var gameFinished = false;
    for (var i = 0; i < chosenWord.length; i++) {
        correctGuesses.push("_");
    }
    document.getElementById('guesses').innerHTML = guessesRemaining;
    document.getElementById('correct').innerHTML = correctGuesses.join(" ");

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    wrongGuesses = [];
    correctGuesses = [];
    guessesRemaining = 10;
    gameFinished = false;
    for (var i = 0; i < chosenWord.length; i++) {
        correctGuesses.push("_");
    }
    document.getElementById('guesses').innerHTML = guessesRemaining;
    document.getElementById('correct').innerHTML = correctGuesses.join(" ");
}

function update(input) {
    if (chosenWord.indexOf(input) === -1) {
        guessesRemaining--;
        document.getElementById('guesses').innerHTML = guessesRemaining;
        wrongGuesses.push(input);
        document.getElementById('wrong').innerHTML = wrongGuesses;
    } else {
        for (var i = 0; i < chosenWord.length; i++) {
            if (chosenWord[i] === input) {
                correctGuesses[i] = input;
                document.getElementById('correct').innerHTML = correctGuesses.join(" ");
            }
        }
    }
}

function checkWin() {
    if (correctGuesses.indexOf("_") === -1) {
      alert(chosenWord.toUpperCase() + "! You Won!");
      wins++;
      document.getElementById('wCount').innerHTML = wins;
      gameFinished = true;
    } else if (guessesRemaining === 0) {
      alert("You Lost. The word was " + chosenWord + ".");
      losses++;
      document.getElementById('lCount').innerHTML = losses;
      gameFinished = true;
    }
  }

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(chosenWord);
    update(userGuess);
    checkWin();
    if (gameFinished == true) {
        startGame();
    }
}

