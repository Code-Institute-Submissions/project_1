$(document).ready(function() {
    
    let mydata;

    $.getJSON("data.json", {}, function(data) {
        mydata = data;
    })
   
   $("button").click(function() {
       let id=$(this).attr("id");
       $("#piccy").attr("src", mydata[id].pic);
       $("#genre").text(mydata[id].genre);
       $("#music").text(mydata[id].text);
   })
    
});