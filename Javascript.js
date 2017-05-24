$(document).ready(function() {
    $("#pin").click(function() {
        alert("it worked");
    });
    var userInput = $("#UserInput").click(function() {
        // alert("hello world");
        var text = $("#textinput").val();
        var location = "#userInput"
            // console.log( location);
        $.getJSON(

            "https://api.giphy.com/v1/gifs/search?q=" + text + "&api_key=dc6zaTOxFJmzC",


            function(response) {
                console.log(response);
                $("#mainimage").attr("src", response.data[1].images.fixed_width_downsampled.url);
            });

    });
    var userInput = $("#UserRandom").click(function() {

        $.getJSON(
            "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&",


            function(response) {
                console.log(response);
                $("#mainimage").attr("src", response.data.image_original_url);
                // alert(response.data.image_original_url);
            });

        // var quickgif = $("#mainimage").attr("src", "https://media0.giphy.com/media/tSLapAiNjqjsI/giphy.gif")
    });

    //var Result = $('Contents')("helloText");
});
