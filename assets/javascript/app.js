$(document).ready(function () {

    var gameStartTime = 45;
    var timer;

    $("#startgame").on("click", function () {
        timer = setInterval(gameTimer, 1000);
        gameTimer();
        console.log(timer);
        $("#startgame").remove();
    })
    function gameTimer() {
        gameStartTime--;
        $("#timeLeft").html(gameStartTime);
        console.log(gameStartTime);
        // if 
            // stop game
    }


    // create questions and answers/chocies 
    // create a tally with correct/incorrect/no answer 
    // create a timer for each session
    // only one answer allowed per question
    // write/get bootstrap for html
    // create a button to start the game
    // start over button -does not reload page, it resets game/done button
    function submitAnswers() {
        var total = 6;
        var score = 0;

        // get user input
        var q1 = document.forms["quizform"]['q1'].value;
        var q2 = document.forms["quizform"]['q2'].value;
        var q3 = document.forms["quizform"]['q3'].value;
        var q4 = document.forms["quizform"]['q4'].value;
        var q5 = document.forms["quizform"]['q5'].value;
        var q6 = document.forms["quizform"]['q6'].value;

        // validation
        for (i = 1; i <= total; i++) {
            if (eval("q" + i) = null || ("q" + i) == "") {
                return false;

            }
        }
        // set correct answers!!!!after questiosn set update!
        var answers = ["a", "b", "c", "d", "e", "c"];

        // check answers//change score to correct
        for (i = 1; i <= total; i++) {
            if (eval("q" + i) == answers[i - 1]) {
                score++;
                console.log("score");
            }
            //  display results
            var results = document.getElementById('results');
            results.innerHTML = "<h3> You scored <span> '+score+' </span> out of <span>'+total+'</span></h3>"   // alert("You scored " +score+ " out of +total+");
        }

        return false;

    }

});

