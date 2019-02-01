$ ( document ).ready(function(){
  $("#changeColour").click(function() {
    var a = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var b = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var c = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
   
    
    $("body").css("background-color: " + "rgb(+"a+","+b+","+c"+"));")
    $("#deployColour").append("rgb(+"a+","+b+","+c"+"));");


        

    
 })
});

