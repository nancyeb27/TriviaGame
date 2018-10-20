// Question and answer Array
$(document).ready (function () {


    var questions = [
    {
        question: 'What is the name of the first man Holly is determined to marry--the ninth richest man in America under fifty?',
        answers: ["Rusty Trawler", "Braves","Gaints","Bears"],
        values: [true, false, false, false] 
    },
    {

        question: "I claimed to be Paul's 'decorator'. Who played me?",
        answers: ["Broncos", "Patricia Neal ","Gaints","Bears"],
        values: [false, true, false, false] 
    },
    {
        question: 'When Doc is trying to convince Lulamae/Holly to come back to Texas with him, when does he say that Fred is due to get out of the Army?',
        answers: ["Broncos", "Braves","Gaints","February "],
        values: [false, false, false, true] 
    },
    {
        question: "How much do Holly's men give her for the powder room?",
        answers: ["Broncos", "Braves","Gaints","50 dollars"],
        values: [false, false, false, true] 
    },
    {
        question: "Where is Tiffany's located?",
        answers: ["Broncos", "Braves","Gaints","New York"],
        values: [false, false, false, true] 
    }
];

// Global variables
var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var none = 0;

   
    $("#start").on("click", function () {
        
        $("#start").fadeToggle("slow", displayQ)
    })
    function displayQ(){
        $(".message-content").remove();
    $("#start").remove();

        
       var questionArea = $("<div>");
       questionArea.attr("id", "question-Area")
       var timer = $("<h2>")
       var question = $("<h2>")

       questionArea.appendTo("#content")
       timer.appendTo(questionArea)
       question.appendTo(questionArea)

       var time = 30;
       timer.html("<h2>" + time + "  seconds remaining</h2>")

       var countDown = setInterval( function() {
           time--;
           timer.html("<h2>" + time + " seconds remaining</h2>")

           if (time === 0) {
               clearInterval(countDown)
               questionArea.fadeToggle("slow", timedOut)
               none ++;
            }
       }, 1000);

       question.html(questions[currentQuestion].question)

            for (var i = 0; i < questions [currentQuestion].answers.length; i++) {
                var answers = $("<button>")
                answers.html(questions[currentQuestion].answers[i])
                answers.addClass("answer-button")
                answers.attr("value", questions[currentQuestion].values[i])
                answers.appendTo(questionArea)
            };

            $("#a0").animate({"left":  " +=600px"})

            $(".answer-button").on ("click", function(){
                console.log($(this).attr("value"));

            if ($(this).attr("value") === "true"){
                questionArea.fadeToggle("slow", displayCorrect)
                clearInterval(countDown);
                correct ++;
            };
      
             if ($(this).attr("value") === "flase"){
                questionArea.fadeToggle("slow", displayCorrect)
                clearInterval(countDown);
                wrong ++;
            };
        });
    };

        function displayCorrect() {
            var cycle = setTimeout(displayQ, 5000)
            var messageArea = $("<div>");
            messageArea.addClass("message-content")

            var winMessage = $("<h2>");
            var detail = $("<h2>");

            messageArea.appendTo($('#content'));
            winMessage.appendTo($(messageArea));
            winMessage.text("Correct!");
            
        if (currentQuestion === (questions.length -1)) {
            clearTimeout (cycle);
            var gameEnd = setTimeout ( gameOver, 5000)
        }
        currentQuestion ++;
        };
            
        function displayWrong() {
            var cycle = setTimeout(displayQ, 5000)
            var messageArea = $("<div>");
            messageArea.addClass("message-content")

            var lossMessage = $("<h2>");
            
            messageArea.appendTo($('#content'));
            lossMessage.appendTo($(messageArea));
            lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
           

        if (currentQuestion === (questions.length -1)) {
            clearTimeout (cycle);
            var gameEnd = setTimeout ( gameOver, 5000)
        }
        currentQuestion ++;
        };

        function timedOut(){
            cycle = setTimeout(displayQ, 5000)
            messageArea = $("<div>");
            messageArea.addClass("message-content")
            var lossMessage = $("<h2>");

            messageArea.appendTo($("#content"));
            lossMessage.appendTo(messageArea)
            lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
      
            if (currentQuestion === (questions.length -1)){
                clearInterval (cycle);
                var gameEnd = setTimeout( gameOver, 5000)
            }
            currentQuestion ++;

        };

        function gameOver() {
            $(".message-content").remove();
            var totalCorrect = $("<h3>")
            var totalIncorrect = $("<h3>")
            var totalNone = $("<h3>")
            var restart = $("<button>")
            totalCorrect.appendTo($("#content"))
            totalCorrect.html("You got " + correct + " correct!")
            totalIncorrect.appendTo("#content")
            totalIncorrect.html("You got " + wrong + " wrong.")
            totalNone.appendTo("#content")

            if (none === 1) {
                totalNone.html ("You didn't answer  " + none + " question.")
            }
                if (none > 1 || none === 0) {
                    totalNone.html ("You didn't answer  " + none + " questions.")
                } 
                restart.addClass("restart")
                restart.text("Restart")
                restart.appendTo($("#content"))

                $(".restart").on ("click" , function() {
                    totalCorrect.remove();
                        totalIncorrect.remove();
                        totalNone.remove();
                        restart.remove();
                        currentQuestion = 0;
                        correct = 0;
                        wrong =0;
                        none = 0;
                        displayQ();
                })
            }
        })
                    
               
    


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