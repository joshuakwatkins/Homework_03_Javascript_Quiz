
var question0 = document.querySelector("#question-0");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var question4 = document.querySelector("#question-4");
var question5 = document.querySelector("#question-5");
var question6 = document.querySelector("#question-6");
var question7 = document.querySelector("#question-7");

var highScoreList = document.querySelector("#high-score-list");

var feedback = document.querySelector("#answer-response");

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

    
}
var gameTimeCountdown;
var finalScore;
var userName;
var gameTime = 750;
var newScore = {};
var isDone = false;
var q1 = true;
var q2 = true;
var q3 = true;
var q4 = true;
var q5 = true;

function countdown() {
    var timer = document.querySelector("#timer-countdown");
    timer.textContent = "";
    // gameTime = 750;
    gameTimeCountdown = setInterval(function () {
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
    gameTime = 750;
    countdown();
    question0.style.display = "none";
    question1.style.display = "block";
    for (i=1;i<5;i++){
        var button = document.getElementsByClassName("button"+i);
        button[0].addEventListener("click", answerCheckOne)
    }
    function answerCheckOne(event) {
        // console.log(event);
        if (event.target.hasAttribute("id","correct")) {
            toQuestion2();
            feedback.textContent="";
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    feedback.textContent=" - - - C o r r e c t - - -";
                    // feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        } else {
            q1 = false;
            toQuestion2();
            feedback.textContent="";
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    // feedback.textContent=" - - - C o r r e c t - - -";
                    feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        }
    }
    console.log("question 1 is working");
    function toQuestion2() {
        question1.style.display = "none";
        question2.style.display = "block";
        question2.addEventListener("click", answerCheckTwo)
        // console.log("question 2 is working");
    }
    function answerCheckTwo(event) {
        // console.log(event);
        if(event.target.hasAttribute("id","correct")) {
            toQuestion3()
            feedback.textContent="";
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    feedback.textContent=" - - - C o r r e c t - - -";
                    // feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        } else {
            q2 = false;
            toQuestion3();
            feedback.textContent="";
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    // feedback.textContent=" - - - C o r r e c t - - -";
                    feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        }
    }
    function toQuestion3() {
        question2.style.display = "none";
        question3.style.display = "block";
        question3.addEventListener("click", answerCheckThree)
        // console.log("question 3 is working");

    }
    function answerCheckThree(event) {
        // console.log(event);
        if(event.target.hasAttribute("id","correct")) {
            toQuestion4();
            feedback.textContent="";
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    feedback.textContent=" - - - C o r r e c t - - -";
                    // feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        } else {
            q3 = false;
            toQuestion4();
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    // feedback.textContent=" - - - C o r r e c t - - -";
                    feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        }
    }
    function toQuestion4() {
        question3.style.display = "none";
        question4.style.display = "block";
        question4.addEventListener("click", answerCheckFour)
        // console.log("question 4 is working");
    }
    function answerCheckFour(event) {
        console.log(event);
        if(event.target.hasAttribute("id","correct")) {
            toQuestion5();
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    feedback.textContent=" - - - C o r r e c t - - -";
                    // feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        } else {
            q4 = false;
            toQuestion5();
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    // feedback.textContent=" - - - C o r r e c t - - -";
                    feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        }
    }
    function toQuestion5() {
        question4.style.display = "none";
        question5.style.display = "block";
        question5.addEventListener("click", answerCheckFive)
        console.log("question 5 is working");

    }
    function answerCheckFive(event) {
        console.log(event);
        if(event.target.hasAttribute("id","correct")) {
            toQuestion6();
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    feedback.textContent=" - - - C o r r e c t - - -";
                    // feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        } else {
            q5 = false;
            toQuestion6();
            var feedbackTime = 100;
            var feedbackTimer = setInterval(function() {
                feedbackTime--;
                if (feedbackTime > 0) { 
                    // feedback.textContent=" - - - C o r r e c t - - -";
                    feedback.textContent=" - - - - W R O N G  Y A  D U M M Y - - - - "
                } else if (feedbackTime <= 0) {
                    feedback.textContent=" ";
                    clearInterval(feedbackTimer);
                }
            },10);
        }
    }
    function toQuestion6() {
        question5.style.display = "none";
        question6.style.display = "block";
        isDone = true;
        var finalScore = gameTime;
        document.querySelector("#final-score").textContent = "Congratulations! You scored " + finalScore + "points! Enter your initials for the High Score board!";
        document.querySelector("#userIDSubmit").addEventListener("click", submitHS);
    }
    function submitHS(event) {
        isDone = false;
        event.preventDefault();
        setHighscores();
        console.log(highScores)
        console.log("beginning of q7");
        // userName = document.querySelector("#userID").value.toUpperCase();
        // // var restartBtn = document.querySelector("#restart-quiz");
        // // restartBtn.addEventListener("click", readyGame);
        // newScore = {
        //     userID: userName,
        //     userScore: gameTime,
        // };
        // console.log(highScores);
        // console.log(newScore);
        // highScores.push(newScore);
        // console.log(highScores);
        // getHighscores();

        // console.log("final step");
    }
};
    

question0.addEventListener("click", quiz);

document.querySelector("#highScoreButton").addEventListener("click",viewHighScore)

function viewHighScore () {
    question0.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
    question7.style.display = "block";
    getHighscores(highScores);
    var restartBtn = document.querySelector("#restart-quiz");
    restartBtn.addEventListener("click", readyGame);
    return;
}

function setHighscores () {
    userName = document.querySelector("#userID").value.toUpperCase();
    // var restartBtn = document.querySelector("#restart-quiz");
    // restartBtn.addEventListener("click", readyGame);
    highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores === null) {
        highScores = [];
    } else {
    newScore = {
        userID: userName,
        userScore: gameTime,
    };
    // console.log(highScores);
    // console.log(newScore);
    highScores.push(newScore);
    // console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    newScore = {};
    console.log(highScores);
    viewHighScore();
}
};

function getHighscores(highScores) {
   highScores = JSON.parse(localStorage.getItem("highScores"));
   if (highScores === null) {
       highScores = [];
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
            // var highScore = highScores[i].userId + " - " + highScores[i].userScore;
            var li = document.createElement("li");
            li.textContent = highScore;
            highScoreList.appendChild(li);
            } 
        }
    };

init();
