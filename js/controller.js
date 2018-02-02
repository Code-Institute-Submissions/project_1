angular.module("Route", [])
    .controller("Post", function($scope, $location) {
        if (localStorage.getItem("username")) {
            $scope.loggedInUser = localStorage.getItem("username");
        } else {
            $scope.loggedInUser = "Not Logged In Yet!";
        }
        $scope.favouriteDessert = "chocolate lava pudding";
        $scope.desserts = [
            {name: "Trifle", description: "Grandma's fave"},
            {name: "Cookies", description: "Warm and chewy with chocolate chips"},
            {name: "Apple Pie", description: "Sticky cinammony goodness"},
            {name: "Crem Brule", description: "Sugar coated pudding"},
            {name: "Chocolate Lava Cake", description: "Gooy chocolate center"},
        ];
        
        $scope.dessert = {name: "", description: ""};
        
        $scope.save = function() {
            $scope.desserts.push($scope.dessert);
            $location.path("/");
            
        };
    })
    
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
    
    .controller("Events", function($scope, $location, UserDataAPIService) {
        
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
        console.log($scope.events);[]
        
        $scope.submitForm = function() {
            if ($scope.eventForm.$valid) {
                $scope.event.username = $scope.username;
                console.log($scope.event);

                localStorage.setItem("event"+lastEvent, JSON.stringify($scope.event));
            }
        };
        
    })
    
    .controller("informationRouting", function($scope, $location, $routeParams, UserAPIService) {
    $.getJSON("../templates/pagedata/main_template_data.json", {}, function(data) {
    mydata = data;

    for(i = 0; i < data.length; i++) {
      let appendString = "<div class='col-xs-6 card'><h3 class='header'>";
      appendString += mydata[i].genre;
      appendString += "</h3><img id='image1' class='card_image'";
      appendString += "alt='" + mydata[i].imageAlt + "' src='";
      appendString += mydata[i].image + "' />";
      appendString += "<p class='description'>" + mydata[i].description + "</p>";
      appendString += "<a class='btn btn-danger btn-sm' href='/find_artists/" + mydata[i].genre_id + "'>More!</a>";
      appendString += "</div>";

      $("#contentbox").append(appendString);
    }
    })
        
    // .controller("informationContent", function($scope, $location, $routeParams, UserAPIService) {
        
    //     $scope.mydata[i] = w
    //     if (w == 1){
            
    //     }
        
        
        
    
    // });
    });
