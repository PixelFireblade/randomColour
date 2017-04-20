function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}




$ ( document ).ready(function(){
  $("#changeColour").click(function() {
    var no1 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var no2 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var no3 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var colour =  /*'"'+*/ "#" + componentToHex(no1) + componentToHex(no2) + componentToHex(no3) /*+ '"'*/;
    $('div').each(function() {
            $(this).css('background',colour);
        
        });
    var rgb = no1 + ',' + no2 + ',' + no3;
    var rgbcode = "rgb(" + rgb + ")";
    console.log(rgb);
    document.body.style = "background-color: " + rgbcode + ";";
    $("p").text(rgbcode);
 })
});

