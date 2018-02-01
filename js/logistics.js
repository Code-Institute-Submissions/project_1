$(document).ready(function() {
    if (window.location.href == "https://project-1-krontime.c9users.io/index.html") {
        
    window.location.href = "/project_1";
            
    }
    $("a").click(function(){
        if (document.getElementById("a") == "day"){
            document.getElementById("stylesheets").href = "css/day_stylsheet.css";
            console.log("day")
        } else if (document.getElementById("a") == "night"){
            document.getElementById("stylesheets").href = "css/night_stylsheet.css";
            console.log("night")
        } else if (document.getElementById("a") == "sea"){
            document.getElementById("stylesheets").href = "css/sea_stylsheet.css";
            console.log("sea")
        } else if (document.getElementById("a") == "future"){
            document.getElementById("stylesheets").href = "css/future_stylsheet.css";
            console.log("future")
        } else if (document.getElementById("a") == "desert"){
            document.getElementById("stylesheets").href = "css/desert_stylsheet.css";
            console.log("desert")
        }
    });
    
    
    
    
    // $("a").click(function() {
    //     if ($(this).attr("href") == "/find_artists"){
    //         let mydata;
    //         console.log(mydata);
    //         $.getJSON("../templates/pagedata/main_template_data.json", {}, function(data) {
    //         mydata = data;
    //         console.log(mydata);
    //         let id = 0;
    //         $("#title1").text(mydata[id].title1);
    //         $("#subtitle1").text(mydata[id].subtitle1);
    //         $("#header1").text(mydata[id].header1);
    //         $("#image1").attr("src", mydata[id].image1);
    //         $("#image1").attr("alt", mydata[id].imageAlt1);
    //         $("#discription1").text(mydata[id].discription1);
    //         $("#header2").text(mydata[id].header2);
    //         $("#image2").attr("src", mydata[id].image2);
    //         $("#image2").attr("alt", mydata[id].imageAlt2);
    //         $("#discription2").text(mydata[id].discription2);
    //         $("#header3").text(mydata[id].header3);
    //         $("#image3").attr("src", mydata[id].image3);
    //         $("#image3").attr("alt", mydata[id].imageAlt3);
    //         $("#discription3").text(mydata[id].discription3);
    //         $("#header4").text(mydata[id].header4);
    //         $("#image4").attr("src", mydata[id].image4);
    //         $("#image4").attr("alt", mydata[id].imageAlt4);
    //         $("#discription4").text(mydata[id].discription4);
    //         $("#header5").text(mydata[id].header5);
    //         $("#image5").attr("src", mydata[id].image5);
    //         $("#image5").attr("alt", mydata[id].imageAlt5);
    //         $("#discription5").text(mydata[id].discription5);
    //         console.log(mydata);
    //         });
    //     }
  
    
    // if (window.location.href == "https://project-1-krontime.c9users.io/find_artists") {
    // if (window.location.href == "https://project-1-krontime.c9users.io/templates/pagedata/main_template_page.html") {
            
    // } else {
    //     console.log(mydata);
    // }
    // });  
    // });
});