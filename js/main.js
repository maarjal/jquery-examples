$(document).ready(function() {
  $(".blackbox").click(function() {
    $(".blackbox").animate({

      width: "+=50px" ,
      height: "+=50px"

    }, 1000);
  });
  $(".redbox").click(function() {




$(".blackbox").toggle();






  $(".redbox").animate({
    width: "+=50px" ,
    height: "+=50px"

  }, 1000

)});

});
