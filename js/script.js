$( "document" ).ready(function() {


    $("#button").click(function(){
        let word = $(".input").val();
        $(".output").text(word);
    });

});

