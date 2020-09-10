$(function() {
    // Listen to "I'm ready" link in the welcome div.
    $("#welcome > a").click(function() {
        alert("clicked");
        return false;
    });
}); // "ready" handler in jQuery. It is called when the HTML is ready.
