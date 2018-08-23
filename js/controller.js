angular.module("Route", [])
    
    .controller("Register", function($scope, UserAPIService) {
        
        $scope.registrationUser = {};
        let URL = "https://morning-castle-91468.herokuapp.com/";
        
        $scope.login = function() {
            UserAPIService.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {
                $scope.token = results.data.token;
                localStorage.setItem("username", $scope.registrationUser.username);
                localStorage.setItem("authToken", $scope.token);
            }).catch(function(err) {
                console.log(err);
            });
        };
        
        $scope.submitForm = function() {
            if ($scope.registrationForm.$valid) {
                $scope.registrationUser.username = $scope.user.username;
                $scope.registrationUser.password = $scope.user.password;
                
                UserAPIService.callAPI(URL + "accounts/register/", $scope.registrationUser).then(function(results) {
                    $scope.data = results.data;
                    alert("You have successfuly registered! Go you!!!");
                    $scope.login();
                }).catch(function(err) {
                    alert("Oh no! There was an Error. Better Check the console!");
                    console.log(err);
                });
                
            }
            
        };
        
    })
    
    .controller("Events", function($scope, $location, $filter, UserDataAPIService) {
        
        let URL = "https://morning-castle-91468.herokuapp.com/";
        $scope.authToken = localStorage.getItem("authToken");
        $scope.username = localStorage.getItem("username");
        
        $scope.events = [];
        let lastEvent = 0;

        while (localStorage.getItem("event"+lastEvent)){
            
            $scope.events.unshift(JSON.parse(localStorage.getItem("event"+lastEvent)));
            lastEvent++;
        }
        
        
        
        JSON.parse(localStorage.getItem("event")) || [];
        
        $scope.submitForm = function() {
            if ($scope.eventForm.$valid) {
                $scope.event.username = $scope.username;

                localStorage.setItem("event"+lastEvent, JSON.stringify($scope.event));
            }
        };
        
    })
    
    .controller("informationRouting", function($scope, $location, $routeParams, UserAPIService) {
    
        $.getJSON("../templates/pagedata/main_template_data.json", {}, function(data) {
        let mydata = data;
    
        for(let i = 0; i < data.length; i++) {
          let appendString = "<div class='col-xs-6 col-sm-3 card'><h3 class='header'>";
          appendString += mydata[i].genre;
          appendString += "</h3><img id='image1' class='card_image'";
          appendString += "alt='" + mydata[i].imageAlt + "' src='";
          appendString += mydata[i].image + "' />";
          appendString += "<p class='description'>" + mydata[i].description + "</p>";
          appendString += "<a class='btn btn-danger btn-sm' href='/find_artists/" + mydata[i].genre_id + "'>More!</a>";
          appendString += "</div>";
    
          $("#contentbox").append(appendString);
        }
        });
    })
        
    .controller("informationContent", function($scope, $location, $routeParams, UserAPIService) {

        
        let id = $routeParams.id;
        let jsonFile;
        
        if (id == "00") {
            jsonFile = "../templates/pagedata/techno_sub-genre_data.json";
        } else if (id == "03") {
            jsonFile = "../templates/pagedata/house_sub-genre_data.json";
            console.log("This");
        } else if (id == "0307") {
            jsonFile = "../templates/pagedata/electro_house_artist_data.json";
            console.log("That");
        } else if (id == "030700") {
            jsonFile = "../templates/pagedata/electro_house_artists/armin_van_buuren.json";
            console.log("Thatothre");
        } else {
            jsonFile = "../templates/pagedata/main_tamplate_data.json";
            alert("Still working on that page!!");
        }
        
        if (id.length <= 4) {
            $.getJSON(jsonFile, {}, function(data) {
            let mydata = data;
            for(id = 0; id < data.length; id++) {
                let appendString = "<div class='col-xs-6 col-sm-3 card'><h3 class='header'>";
                  appendString += mydata[id].genre;
                  appendString += "</h3><img id='image1' class='card_image'";
                  appendString += "alt='" + mydata[id].imageAlt + "' src='";
                  appendString += mydata[id].image + "' />";
                  appendString += "<p class='description'>" + mydata[id].description + "</p>";
                  appendString += "<a class='btn btn-danger btn-sm' href='/find_artists/" + mydata[id].genre_id + "'>More!</a>";
                  appendString += "</div>";
            
                  $("#contentbox").append(appendString);
            }
            
            });  
        } else if (id.length > 4) {
            $.getJSON(jsonFile, {}, function(data) {
            let mydata = data;
            for(id = 0; id < data.length; id++) {
                let appendString = "<div class='col-xs-12 col-sm-3 card'><img id='image1' class='card_image'";
                  appendString += "alt='" + mydata[id].imageAlt + "' src='";
                  appendString += mydata[id].image + "' />";
                  appendString += "<h3 class='header'>";
                  appendString += mydata[id].genre;
                  appendString += "</h3><p>" + mydata[id].discription1 + "</p>";
                  appendString += "<a href='" + mydata[id].href1 + "' class='icon'><i class='fab fa-facebook-square'></i></a>";
                  appendString += "<a href='" + mydata[id].href2 + "' class='icon'><i class='fab fa-twitter'></i></a></div>";
                  appendString += "<div class='col-xs-12 col-sm-9 card'><p>" + mydata[id].discription2 + "</p></div>";
                  
                  $("#contentbox").append(appendString);
            } 
            });
            } else {
                alert("INTERNAL ERROR: This Shouldn't Happen!");
            }
    });
