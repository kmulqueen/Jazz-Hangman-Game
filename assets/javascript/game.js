// I'm going to create an array and store multiple object literals inside for words to guess as well as hints and as many other things that I want to add.

var infoBank = [
     pianoOne = {
         firstName: "Herbie",
         lastName: "Hancock",
         personalHint: "Known for playing with Miles Davis and leading the Head Hunters.",
     },
     pianoTwo = {
         firstName: "Bill",
         lastName: "Evans",
         personalHint: "Known for leading his own trio for and contributing to the record 'Kind of Blue', everybody digs this guy."
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
         personalHint: "Bass Player known for playing with Wayne Shorter, John Coltrane, and the Jazz Messengers."
     },
     bassTwo = {
         firstName: "Ron",
         lastName: "Carter",
         personalHint: "Known more for his work with Miles Davis, this bass player also contributed the bass line for 'Verses From the Abstract' off of the record 'Low End Theory' from A Tribe Called Quest in 1991."
     },
     bassThree = {
         firstName: "Jimmy",
         lastName: "Garrison",
         personalHint: "Replacing Reggie Workman in John Coltrane's quartet, this lyrical bass player is featured on 'A Love Supreme' as well as many other Coltrane records."
     },
     bassFour = {
         firstName: "Richard",
         lastName: "Davis",
         personalHint: "This classically trained bass player played with many of the greats including Miles Davis, Sarah Vaughn, Frank Sinatra, Eric Dolphy, Elvin Jones, Ahmad Jamal, and the Thad Jones and Mel Lewis Orchestra."
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
         personalHint: "This drummer is known for being able to control a band with his ride cymbal as well as being very taseful. He was Lee Morgan's go-to drummer. He was also an active part in the avant-garde scene."
     },
     drumsFour = {
         firstName: "Max",
         lastName: "Roach",
         personalHint: "Known as an extremely melodic drummer, he was an integral part of the bebop era. His record 'Drums Unlimited' consists of several drum-only compositions."
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
alert("Press Any Key to Start!");

function startGame(){
    //Set up new game
    guessCount = 9;
    document.getElementById("guesses-remaining").textContent = guessCount;
    wrongGuess = [];
    document.getElementById("wrong-letters").textContent = wrongGuess;
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
        
        
        
    };
    console.log(word);
};


// Getting users guess input
document.onkeyup = function(event) {

   if(event.keyCode >= 65 && event.keyCode <=90) {
        userGuess = (event.key);
   }

    var word = newWord.firstName.toLowerCase() + " " + newWord.lastName.toLowerCase();
    // console.log(word);
    
    // Determine wether the guess exists in the word or not
    if(word.indexOf(userGuess) > -1){
        for(var j = 0; j < word.length; j++){
            // Letters that DON'T WORK for toLowerCase for some reason: w, b, e, l, j, g, h, c, m, and sometimes r.
            if(word[j].toLowerCase() === userGuess.toLowerCase()){
                underScores[j] = word[j];
                document.getElementById("phrase").textContent = underScores.join("");
            };
        }
    } else if (underScores.indexOf(userGuess.toLowerCase()) === -1 && underScores.indexOf(userGuess.toUpperCase() === -1)) {
        wrongGuess.push(userGuess);
        document.getElementById("wrong-letters").textContent = wrongGuess; 
        guessCount--;
        document.getElementById("guesses-remaining").textContent = guessCount;
    };

    // Ending the game when guessCount = 0 (LOSS)
    if(guessCount === 0) {
        losses++;
        document.getElementById("losses").textContent = losses;
        // Trying to get the word to display when the user loses so they can see the answer. DOESN'T WORK.
        document.getElementById("phrase").textContent = word; 
        alert("You ran out of guesses!");
        // Restart Game        
        startGame();
        // Ending the game when phrase is correct (WIN)
    } else if(underScores.join("") === word) {
        wins++;
        document.getElementById("wins").textContent = wins;
        // Trying to get the word to display when the user wins so they can see the answer. DOESN'T WORK.
        document.getElementById("phrase").textContent = word;
        alert("You win!");
        // Restart Game
        startGame();
    };
};


startGame();






