$(document).ready(function(){
  console.log('Ready!');

  $("form").on("submit", function(){
    console.log("Submitted form");
    var v1 = $('input[name="n1"]').val();
    var v2 = $('input[name="n2"]').val();
    $.ajax({
      type: "POST",
      url: "/",
      data: {first: v1, second: v2},
      success: function(response){
        console.log(response);
        $("#results").html(response.total);
        $("input").val("");
      },
      error: function(response){
        console.log(error);
      }
    })
  });
});
