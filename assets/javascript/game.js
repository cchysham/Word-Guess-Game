


var words = ["mole", "kitten", "peccary", "colt", "mink", "monkey", "iguana", "guinea pig", "walrus", "hedgehog", "chipmunk", "whale", "coyote", "porcupine", "mandrill", "rooster", "lovebird", "hog", "lion", "marten", "springbok", "dormouse", "ibex", "chicken", "ferret", "alpaca", "ram", "frog", "bison", "sloth", "panda", "tapir", "bighorn", "badger", "steer", "octopus", "ocelot", "jaguar", "hare", "alligator", "raven", "crow", "musk-ox", "snake", "parrot", "bull", "capybara", "okapi", "eagle", "donkey", "dung beetle", "lynx", "jackal", "kangaroo", "koala", "bunny", "ground hog", "cat", "crab", "squirrel", "wolverine", "pronghorn", "ox", "owl", "doe", "shrew", "porpoise", "dromedary", "rat", "seal", "komodo dragon", "opossum", "sheep", "lizard", "zebra", "weasel", "bumble bee", "ape", "puppy", "horse", "giraffe", "wolf", "prairie dog", "armadillo", "gazelle", "iguana", "beaver", "tiger", "otter", "platypus", "pig", "wildcat", "crocodile", "lamb", "boar", "rabbit", "cheetah", "orca", "raccoon", "mustang"];
var chosenWord = words[Math.floor(Math.random() * words.length)];
var wrongGuesses = [];
var correctGuesses = [];
var guessesRemaining = 10;
var wins = 0;
var losses = 0;
    for (var i = 0; i < chosenWord.length; i++) {
        correctGuesses.push("_");
        correctGuesses.join(" ");
    }
    document.getElementById('guesses').innerHTML = guessesRemaining;
    document.getElementById('correct').innerHTML = correctGuesses;

function startGame() {
    var wrongGuesses = [];
    var correctGuesses = [];
    var guessesRemaining = 10;
    for (var i = 0; i < chosenWord.length; i++) {
        correctGuesses.push("_");
    }
    document.getElementById('guesses').innerHTML = guessesRemaining;
    document.getElementById('correct').innerHTML = correctGuesses;
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
                document.getElementById('correct').innerHTML = correctGuesses;
            }
        }
    }
}

function checkWin() {
    if (correctGuesses.indexOf("_") === -1) {
      alert("You Won!");
      document.getElementById('wCount').innerHTML = wins;
    } else if (guessesRemaining === 0) {
      alert("You Lost. The word was " + chosenWord + ".");
      document.getElementById('lCount').innerHTML = losses;
    }
  }

function makeSpaces(){
    var spaces = "";
    for(var i = 0; i < chosenWord.length; i++) {
        spaces += " _ ";
    }
    return spaces; 
}

//startGame();

document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log(chosenWord);
    update(userGuess);
    checkWin();
}

