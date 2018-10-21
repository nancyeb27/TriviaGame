// Question and answer Array
$(document).ready(function () {


    var questions = [
        {
            question: "Who is Holly determined to marry--the ninth richest man in America under fifty?",
            answers: ["Rusty Trawler", "Blake Edwards", "Rock Hudson", "Jose de Silva Perrera"],
            values: [true, false, false, false],
            
        },
        {

            question: "What is Holly's cat's name?",
            answers: ["Queenie", "Cat", "Sherman", "Mr. Peabody"],
            values: [false, true, false, false],
        
                },
        {
            question: 'When Doc is trying to convince Lulamae/Holly to come back to Texas with him, when does he say that Fred is due to get out of the Army?',
            answers: ["June", "April", "October", "February "],
            values: [false, false, false, true],
           
        },
        {
            question: "Where does Holly retreat when things get awkward between her and Paul?",
            answers: ["The library", "The bathroom", "The mall", "Tiffany's"],
            values: [true, false, false, false],
           
        },
        {
            question: "What famous actor played the small role of Mr. Yunioshi?",
            answers: ["Mickey Rooney", "Henry Fonda", "Gene Kelly", "Clark Gable"],
            values: [true, false, false, false],
            
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
    function displayQ() {
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
        timer.html("<h2>" + time + "  Seconds Remaining</h2>")

        var countDown = setInterval(function () {
            time--;
            timer.html("<h2>" + time + " Seconds Remaining</h2>")

            if (time === 0) {
                clearInterval(countDown)
                questionArea.fadeToggle("slow", timedOut)
                none++;
            }
        }, 1000);

        question.html(questions[currentQuestion].question)

        for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
            var answers = $("<button>")
            answers.html(questions[currentQuestion].answers[i])
            answers.addClass("answer-button")
            answers.attr("value", questions[currentQuestion].values[i])
            answers.appendTo(questionArea)
        };

        // $("#a0").animate({ "left": " +=600px" })

        $(".answer-button").on("click", function () {
            console.log($(this).attr("value"));

            if ($(this).attr("value") === "true") {
                questionArea.fadeToggle("slow", displayCorrect)
                clearInterval(countDown);
                correct++;
            };

            if ($(this).attr("value") === "false") {
                questionArea.fadeToggle("slow", displayWrong)
                clearInterval(countDown);
                wrong++;
            };
        });
    };

    function displayCorrect() {
        var cycle = setTimeout(displayQ, 5000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")

        var winMessage = $("<h2>")
       

        messageArea.appendTo($('#content'));
        winMessage.appendTo($(messageArea));
      
        winMessage.text("Correct!");
      



        if (currentQuestion === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 2000)
        }
        currentQuestion++;
    };

    function displayWrong() {
        var cycle = setTimeout(displayQ, 2000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")

        var lossMessage = $("<h2>");

        messageArea.appendTo($('#content'));
        lossMessage.appendTo($(messageArea));
        lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);


        if (currentQuestion === (questions.length - 1)) {
            clearTimeout(cycle);
            var gameEnd = setTimeout(gameOver, 2000)
        }
        currentQuestion++;
    };

    function timedOut() {
        var cycle = setTimeout(displayQ, 2000)
        var messageArea = $("<div>");
        messageArea.addClass("message-content")
        var lossMessage = $("<h2>");

        messageArea.appendTo($("#content"));
        lossMessage.appendTo(messageArea);
        lossMessage.html("Time is up! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);

        if (currentQuestion === (questions.length - 1)) {
            clearInterval(cycle);
            var gameEnd = setTimeout(gameOver, 2000)
        }
        currentQuestion++;

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
            totalNone.html("You didn't answer  " + none + " question.")
        }
        if (none > 1 || none === 0) {
            totalNone.html("You didn't answer  " + none + " questions.")
        }
        restart.addClass("restart")
        restart.text("Restart")
        restart.appendTo($("#content"))

        $(".restart").on("click", function () {
            totalCorrect.remove();
            totalIncorrect.remove();
            totalNone.remove();
            restart.remove();
            currentQuestion = 0;
            correct = 0;
            wrong = 0;
            none = 0;
            displayQ();
        })
    }
})




