$(document).ready(function() {
    if (localStorage.getItem("stylesheet") !== null && localStorage.getItem("stylesheet") !== document.getElementById("stylesheets").href) {
                let style = localStorage.getItem("stylesheet");
                document.getElementById("stylesheets").href = style;
            }
    if (window.location.href == "https://project-1-krontime.c9users.io/index.html") {
        
    window.location.href = "/project_1";
            
    }
    $("#stylesheetDropdown a").click(function(){
        if ($(this).attr("id") == "day"){
            document.getElementById("stylesheets").href = "css/day_stylsheet.css";
            localStorage.setItem("stylesheet", "css/day_stylsheet.css")
        } else if ($(this).attr("id") == "night"){
            document.getElementById("stylesheets").href = "css/night_stylsheet.css";
            localStorage.setItem("stylesheet", "css/night_stylsheet.css")
        } else if ($(this).attr("id") == "sea"){
            document.getElementById("stylesheets").href = "css/sea_stylsheet.css";
            localStorage.setItem("stylesheet", "css/sea_stylsheet.css")
        } else if ($(this).attr("id") == "future"){
            document.getElementById("stylesheets").href = "css/future_stylsheet.css";
            localStorage.setItem("stylesheet", "css/future_stylsheet.css")
        } 
    });
    
    $(".navbar-collapse li a").click(function() {
        $(".navbar-collapse").collapse('hide');
    });
    
    $('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
    });
});