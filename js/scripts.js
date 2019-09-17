// Business Logic


$(document).ready(function(){
  $("form#pick").submit(function(event) {
    event.preventDefault()
    var name = $("#animals").val();



    // User Interface



    if (name === "dogs") {
      $("#menu").show();
      $(".bigCats, .turtles").hide()
      console.log("no");
}
//   }  else if (name (!dogs)
//       $("#").show();
//       console.log(hey);
// }

  });
});
