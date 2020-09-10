var QUESTIONS = [
    [
        "What does Gustav like the best?",
        [
            "Sushis",
            "Titties",
            "Waifu",
            "Pillows"
        ]
    ],
    [
        "What does Leo like the best?",
        [
            "Food",
            "Dicks",
            "Zac Efron",
            "Chicken"
        ]
    ],
    [
        "Is Gustav a weeb?",
        [
            "Fuck yes.",
            "Fuck fuck yes!"
        ]
    ]
];

$(function() {

    var currentQuestion = 0;

    // Listen to "I'm ready" link in the welcome div.
    $("#welcome > a").click(function() {
        $("body").addClass("in-quiz");
        loadQuestion();
        
        // Return false so the navigation is cancelled.
        return false;
    });

    function loadQuestion() {
        var question = QUESTIONS[currentQuestion];

        $("#quiz-content > h1").text(question[0]);
    }

}); // "ready" handler in jQuery. It is called when the HTML is ready.
