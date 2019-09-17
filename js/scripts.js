// Business Logic


$(document).ready(function(){
  $("form#pick").submit(function(event) {
    event.preventDefault()
    var name = $("#animals").val();



    // User Interface

    if (name === "dogs") {
      $("#menu").show();
      $(".bigCats, .turtles").hide()
      $(".dogs").show()

    } else if (name === "bigCats") {
      $("#menu").show();
      $(".dogs, .turtles").hide()
      $(".bigCats").show()

    } else if (name === "turtles") {
        $("#menu").show();
        $(".dogs, .bigCats").hide()
        $(".turtles").show()


    }


  });
});
