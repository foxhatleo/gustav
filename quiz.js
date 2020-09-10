// This is the question definitions.
// An array of arrays which contains the question, the array of answers, and the index of the correct answer.
var QUESTIONS = [
    [
        "What does Gustav like the best?",
        [
            "Sushis",
            "Titties",
            "Waifu",
            "Pillows"
        ],
        1
    ],
    [
        "What does Leo like the best?",
        [
            "Food",
            "Dicks",
            "Zac Efron",
            "Chicken"
        ],
        1
    ],
    [
        "Is Gustav a weeb?",
        [
            "Fuck yes.",
            "Fuck fuck yes!"
        ],
        1
    ]
];

// Wrap all logic in a "ready" handler of jQuery. Basically a function that starts on html load, using jquery
$(function() {

    // The current question that the user is on.
    var currentQuestion = 0;

    // The number of question that the user got right.
    var points = 0;

    // Listen to "I'm ready" link in the welcome div.
    $("#ready-button").click(function() {
        $("body").addClass("in-quiz");

        // Reset current question.
        currentQuestion = 0;
        points = 0;

        // Load the first question.
        loadQuestion();
        
        // Return false so the navigation is cancelled.
        return false;
    });

    function loadQuestion() {
        // Pull question data out.
        var question = QUESTIONS[currentQuestion];

        // Update question text.
        $("#quiz-content > h1").text(question[0]);

        // Clear all html in answers container.
        var answersContainer = $("#answers");
        answersContainer.html("");

        // Pull answers array out of selected question.
        var answers = question[1];

        // For each answer, add it to the answers container.
        for (var i = 0, j = answers.length; i < j; i++) {
            var answerText = answers[i];
            // Set up the anchor of the answer.
            var anchor = $("<a href=\"\">" + answerText + "</a>");
            // Add a click handler to the anchor.
            anchor.click(userClickedAnswer.bind(null, i));
            // Wrap the anchor in an li.
            var li = $("<li></li>");
            li.append(anchor);
            // Append the li into the answers container (which is an ul).
            answersContainer.append(li);
        }
    }

    function userClickedAnswer(i) {
        // Pull data of current question.
        var question = QUESTIONS[currentQuestion];
        // The index of the correct answer.
        var correctAnswer = question[2];
        if (i == correctAnswer) {
            alert("You are correct!");
            points++; // Add a point to the user.
        } else {
            // Get text of the correct answer.
            var correctAnswerText = question[1][correctAnswer];
            alert("You were wrong! The correct answer is \"" + correctAnswerText + "\".");
        }
        // Show next question is there is more.
        if (currentQuestion < QUESTIONS.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            userFinishedQuiz();
        }
        return false;
    }

    function userFinishedQuiz() {
        // Remove in quiz class and add done class.
        $("body").removeClass("in-quiz").addClass("done");

        // Fill in the number of questions that were correct and the number of total questions.
        $("#correct-num").text(points);
        $("#total-num").text(QUESTIONS.length);

    }

    $("#restart").click(function() {
        // Remove both in quiz class and done class.
        $("body").removeClass("in-quiz").removeClass("done");
    });

}); 
