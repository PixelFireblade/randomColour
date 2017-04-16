function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return '"'+ "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + '"';
}

$ ( document ).ready(function(){
  $("#changeColour").click(function() {
    var no1 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var no2 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var no3 = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var color = alert( rgbToHex(no1, no2, no3) );
    document.body.style.backgroundColor = color;
    
    console.log(randomNumber);
    $("p").text(randomNumber);
 })
});
