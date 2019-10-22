$("document").ready(function() {

    $("#button").click(function() {

        let word = $(".input").val();
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return word + "ay"
            }

        else {
            let first_letter = word.slice(0,1);
            return word + first_letter +"ay"
            }

    $(".output").text(word);

     });
});

