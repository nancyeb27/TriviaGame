// Question and answer Array
var questions = [
    {
        question: 'What sports team is on the grandsons shirt?',
        answers: [
            { answer: "A. Broncos", value: false },
            { answer: "B. Braves", value: false },
            { answer: "C. Gaints", value: false },
            { answer: "D. Bears", value: true },
        ]
    },
    {

        question: 'What sports team is on the grandsons shirt?',
        answers: [
            { answer: "A. Broncos", value: false },
            { answer: "B. Braves", value: false },
            { answer: "C. Gaints", value: false },
            { answer: "D. Bears", value: true },
        ]
    },
    {
        question: 'What sports team is on the grandsons shirt?',
        answers: [
            { answer: "A. Broncos", value: false },
            { answer: "B. Braves", value: false },
            { answer: "C. Gaints", value: false },
            { answer: "D. Bears", value: true },
        ]
    },
    {
        question: 'What sports team is on the grandsons shirt?',
        answers: [
            { answer: "A. Broncos", value: false },
            { answer: "B. Braves", value: false },
            { answer: "C. Gaints", value: false },
            { answer: "D. Bears", value: true },
        ]
    },
    {
        question: 'What sports team is on the grandsons shirt?',
        answers: [
            { answer: "A. Broncos", value: false },
            { answer: "B. Braves", value: false },
            { answer: "C. Gaints", value: false },
            { answer: "D. Bears", value: true },
        ]
    }
];

// Global variables
var game;
var counter = 0;
var clock;
var timer;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;


$(document).ready(function () {
    $(".answers").css("visibility", "hidden");
    $("body").on("click", ".start-btn", function (event) {
        event.preventDefault();
        startGame();
        $(".answers").css('visibiity', "visible");
    });
    $("body").on("click", ".answer", function (event) {
        // console.log($(this));
        chosenAnswer = $(this).text();
        var answerCounter = questions[counter].answers;
        var answer = $(".answer");
        for (var i = 0; i < answerCounter.length; i++) {
            if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
                clearInterval(clock);
                var right = $(this).attr('class', "right-answer answer");
                rightAnswer();
            }
            else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === flase) {
                clearInterval(clock);
                $(this).attr('class', 'wrong-answer answer');
                wrongAnswer();
            }
        }
    });
});
    


            //  display results
//             var results = document.getElementById('results');
//             results.innerHTML = "<h3> You scored <span> '+score+' </span> out of <span>'+total+'</span></h3>"   // alert("You scored " +score+ " out of +total+");
//         }

//         return false;

//     }

// });

// var gameStartTime = 45;


// $("#startgame").on("click", function () {
//     timer = setInterval(gameTimer, 1000);
//     gameTimer();
//     console.log(timer);
//     $("#startgame").remove();
// })
// function gameTimer() {
//     // if gameStartTime >= 0;
//     gameStartTime--;
//     $("#timeLeft").html("Time Remaining " + gameStartTime);
//     console.log(gameStartTime);
    //  else  {
    //      if gameStartTime == 0;
    //         end gameStartTime;
    //  }  
        // stop game