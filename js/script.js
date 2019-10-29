$("document").ready(function() {

    $("#button").click(function() {
    debugger;
        let word = $(".input").val();
        let letter = word.charAt(0);
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            word= word + "ay";
        }

        else {
            let first_letter = word.slice(0,1);
             word= word + first_letter +"ay";
             console.log(word);
        }

        $(".output").text(word.slice(1));

     });


});

