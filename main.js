function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}




$ ( document ).ready(function(){
  $("#changeColour").click(function() {
    var a = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var b = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var c = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
   
    $('div').each(function() {
            document.body.style.backgroundColor = rgb(a,b,c);
        
        });
    
 })
});

