$(document).ready(function() {
    if (window.location.href == "https://project-1-krontime.c9users.io/index.html") {
        
    window.location.href = "/project_1";
            
    }
    if (window.location.href == "https://project-1-krontime.c9users.io/find_artists") {
        
    window.location.href = "https://project-1-krontime.c9users.io/find_artists/0";
            
    }
    
    $("#stylesheetDropdown a").click(function(){
        if ($(this).attr("id") == "day"){
            document.getElementById("stylesheets").href = "css/day_stylsheet.css";
        } else if ($(this).attr("id") == "night"){
            document.getElementById("stylesheets").href = "css/night_stylsheet.css";
        } else if ($(this).attr("id") == "sea"){
            document.getElementById("stylesheets").href = "css/sea_stylsheet.css";
        } else if ($(this).attr("id") == "future"){
            document.getElementById("stylesheets").href = "css/future_stylsheet.css";
        }
    });
    
});