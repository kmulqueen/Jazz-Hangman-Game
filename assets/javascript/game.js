// I'm going to create an array and store multiple object literals inside for words to guess as well as hints and as many other things that I want to add.

var infoBank = [
     pianoOne = {
         firstName: "Herbie",
         lastName: "Hancock",
         personalHint: "Known for playing with Miles Davis and leading the Head Hunters."
     },
     pianoTwo = {
         firstName: "Bill",
         lastName: "Evans",
         personalHint: "Known for leading their own trio for and contributing to the record 'Kind of Blue'."
     },
     pianoThree = {
         firstName: "Ahmad",
         lastName: "Jamal",
         personalHint: "Known for being very expressive with space and phrasing, Pete Rock sampled from this pianists version of 'I Love Music', to produce the beat for 'The World is Yours' by Nas."
        
     },
     pianoFour = {
         firstName: "Larry",
         lastName: "Young",
         personalHint: "Known for his amazing organ work, he recorded 'Unity' with a quartet of Joe Henderson, Woody Shaw, and Elvin Jones."
     },
     bassOne = {
         firstName: "Reggie",
         lastName: "Workman",
         personalHint: "Bass Player"
     },
     bassTwo = {
         firstName: "Ron",
         lastName: "Carter",
         personalHint: "Bass Player"
     },
     bassThree = {
         firstName: "Jimmy",
         lastName: "Garrison",
         personalHint: "Bass Player"
     },
     bassFour = {
         firstName: "Richard",
         lastName: "Davis",
         personalHint: "Bass Player"
     },
     drumsOne = {
         firstName: "Elvin",
         lastName: "Jones",
         personalHint: "Known for playing with John Coltrane, this drummer uses very unusual rhythmic phrasing that seems to 'stretch' the time."
     },
     drumsTwo = {
         firstName: "Tony",
         lastName: "Williams",
         personalHint: "This explosive drummer first joined Miles Davis' band in his late teens, and is known for his incredible up-tempo ride cymbal playing."
     },
     drumsThree = {
         firstName: "Billy",
         lastName: "Higgins",
         personalHint: "This drummer is known for his ability to control a band with his ride cymbal and to not do anything too flashy. He was Lee Morgan's go-to drummer."
     },
     drumsFour = {
         firstName: "Max",
         lastName: "Roach",
         personalHint: "Known as an extremely melodic drummer."
     }
];


// Declaring my gloal variables.

var wins = 0,
    losses = 0,
    guessCount = 9,
    wrongGuess = [],
    userGuess = [],
    underScores = [],
    newWord;


// Creating a start game function. It randomly generates a new word to solve from the info bank and writes the string value to the document.

function startGame(){
    //Set up new game
    guessCount = 9;
    document.getElementById("guesses-remaining").textContent = "Guesses Remaining: " + guessCount;
    wrongGuess = [];
    document.getElementById("wrong-letters").textContent = "Wrong Letters: " + wrongGuess;
    userGuess = [];
    underScores = [];


    // Generate random word
    newWord = infoBank[[Math.floor(Math.random() * infoBank.length)]];

    // Using a new variable and assigning the appropriate object property values to it, I can "push" underScores to the word length because I now have access to the property values without going through the object. Also, now it's a string so the .length will work.
    var word = newWord.firstName + " " + newWord.lastName;
    var hint = newWord.personalHint;

    // Pushing underscores and spaces to appropriate places
    for(var i = 0; i < word.length; i++){
        if(word[i] === " ") {
            underScores.push(" ");
        } else {
            underScores.push("_");
        };

        // Displaying unsolved word to screen
        document.getElementById("phrase").textContent = underScores.join("");
        document.getElementById("hint").textContent = "Hint: " + hint;
        
        console.log(underScores);
        console.log(word);
    };

};

// Getting users guess input
document.onkeyup = function(event) {
    userGuess = (event.key);
    console.log(userGuess);
    var word = newWord.firstName + " " + newWord.lastName;

    // Determine wether the guess exists in the word or not
    if(word.indexOf(userGuess) > -1){
        for(var j = 0; j < word.length; j++){
            // Letters that DON'T WORK for toLowerCase for some reason: w, b, e, l, j, g, h, c, m
            if(word[j].toLowerCase() === userGuess.toLowerCase()){
                underScores[j] = word[j];
                document.getElementById("phrase").textContent = underScores.join("");
            };
        }
    } else {
        wrongGuess.push(userGuess);
        document.getElementById("wrong-letters").textContent = "Wrong Letters: " + wrongGuess; 
        guessCount--;
        document.getElementById("guesses-remaining").textContent = "Guesses remaining: " + guessCount;
    };
    // Ending the game when guessCount = 0 (LOSS)
    if(guessCount === 0) {
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        // document.getElementById("phrase").textContent = word; Trying to get the word to display when the user loses so they can see the answer.
        alert("You ran out of guesses!");
        // Restart Game        
        startGame();
        // Ending the game when phrase is correct (WIN)
    } else if(underScores.join("") === word) {
        alert("You win!");
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        // Restart Game
        startGame();
    };
};


startGame();




