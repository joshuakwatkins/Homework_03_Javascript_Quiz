



// on start, begin a set interval for 75 seconds and advance the index a position to show which card

// sooo for every question (stored as a list within an object? or as an array?)
// if (event.target.hasAttribute.dataSet.correct)
// then advance to the next card, and display correct/incorect for an interval.
// also probably i want include a running score
// else we subtract 10 from the interval and display the next card.
// repeat for questions 2 through 5.
// upon selecting an answer for question 5, the timer stops
// and you are presented your final score and are prompted to enter your initials for your high score.
// your high score is then appended to an object containing 2 arrays,
// one for the initials input and one for the score, and stored in local storage
// the scoreboard is then procedurally generated using a for loop
// and some conditional css formatting (nth child?)
// 

var question0 = document.querySelector("#question-0");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var question6 = document.querySelector("#question-6");
var question7 = document.querySelector("#question-7");

var highScoreList = document.querySelector("#high-score-list");

function readyGame () {
question0.style.display = "block";
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
question6.style.display = "none";
question7.style.display = "none";
};

var highScores = [
    
];





function init() {
    readyGame();
    getHighscores(highScores);
    setHighscores();
    
}
var finalScore;
var userName;
var gameTime = 750;
var isDone = false;
var q1 = true;
var q2 = true;
var q3 = true;
var q4 = true;
var q5 = true;

function countdown() {
    var timer = document.querySelector("#timer-countdown");
    var gameTimeCountdown = setInterval(function () {
    gameTime--;
    timer.textContent = "TIME: " + gameTime;
    if (gameTime <= 0) {
    clearInterval(gameTimeCountdown);

    } else if (!q1) {
        gameTime = gameTime - 100;
        q1 = true;
    } else if (!q2) {
        gameTime = gameTime - 100;
        q2 = true;
    } else if (!q3) {
        gameTime = gameTime - 100;
        q3 = true;
    } else if (!q4) {
        gameTime = gameTime - 100;
        q4 = true;
    } else if (!q5) {
        gameTime = gameTime - 100;
        q5 = true;
    } else if (gameTime > 0 && isDone) {
        clearInterval(gameTimeCountdown)
    } 
}, 100);
};

function quiz () {
    countdown();
    question0.style.display = "none";
    question1.style.display = "block";
    for (i=1;i<5;i++){
        var button = document.getElementsByClassName("button"+i);
        console.log(button[0]);
        button[0].addEventListener("click", answerCheckOne)
    }
    // var questionTarget1 = question1.getElementsByClassName("button");
    // questionTarget1.addEventListener("click", answerCheckOne);
    function answerCheckOne(event) {
        console.log(event);
        if (event.target.hasAttribute("id","correct")) {
            toQuestion2();
        } else {
            q1 = false;
            toQuestion2();
        }
    }
    console.log("question 1 is working");
    function toQuestion2() {
        question1.style.display = "none";
        question2.style.display = "block";
        question2.addEventListener("click", toQuestion3)
        console.log("question 2 is working");

    }
    function toQuestion3() {
        question2.style.display = "none";
        question3.style.display = "block";
        question3.addEventListener("click", toQuestion4)
        console.log("question 3 is working");

    }
    function toQuestion4() {
        question3.style.display = "none";
        question4.style.display = "block";
        question4.addEventListener("click", toQuestion5)
        console.log("question 4 is working");
    }
    function toQuestion5() {
        question4.style.display = "none";
        question5.style.display = "block";
        question5.addEventListener("click", toQuestion6)
        console.log("question 5 is working");

    }
    function toQuestion6() {
        console.log("beginning of q6");
        question5.style.display = "none";
        question6.style.display = "block";
        isDone = true;
        console.log("middle of q6");
        var finalScore = gameTime;
        document.querySelector("#final-score").textContent = "Congratulations! You scored " + finalScore + "points! Enter your initials for the High Score board!";
        console.log("end of q6");
        document.querySelector("#userIDSubmit").addEventListener("click", submitHS);
    }
    function submitHS(event) {
        event.preventDefault;
        console.log(highScores)
        console.log("beginning of q7");
        userName = document.querySelector("#userID").value.toUpperCase();
        var newScore = {
            userID: userName,
            userScore: gameTime,
        };
        console.log(newScore);
        highScores.push(newScore);
        console.log(highScores.length);
        setHighscores();
        // getHighscores();
        viewHighScore();
        console.log("final step");
    }
};
    

question0.addEventListener("click", quiz);

document.querySelector("#highScoreButton").addEventListener("click",viewHighScore)

function viewHighScore () {
    // setHighscores();
    getHighscores(highScores);
    question0.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
    question7.style.display = "block";
    return;
}

function setHighscores () {
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log("THIS IS MY SET ITEM FOR THE HIGH SCORE ITEM ARRAY" + localStorage.getItem("highScores"));
};

function getHighscores(highScores) {
   highScores = JSON.parse(localStorage.getItem("highScores"));
   if (highScores === null) {
       return;
   } else {
       highScores.sort((a , b) => {
        return b.userScore - a.userScore;
    });
    highScoreList.innerHTML= "";
    console.log(highScores);
    console.log(highScores.length);
        for (i=0; i<highScores.length; i++) {
            var highScore = `${highScores[i].userID} - ${highScores[i].userScore}`;
            var li = document.createElement("li");
            li.textContent = highScore;
            li.setAttribute("data-index", i);
            highScoreList.appendChild(li);
            } 
            }
        };

init();
