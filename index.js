$(document).ready(function () {
  
   $(".dropdownMenu").click(function () {
    $("#panel").slideToggle("slow");
  });
  
  $(".resume").click(function () {
    $("#div1").slideToggle("slow");
  });
  
});

/*/
$(document).ready(function(){
  $(".resume").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
  });
});
/*/
