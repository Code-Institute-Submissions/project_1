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
        console.log(mydata);
        let mydata;
        console.log(mydata);
        $.getJSON("project_1/templates/pagedata/main_template_data.json", {}, function(data) {
        mydata = data;
        let id = $routeParams.id;
        console.log(mydata);
        $("#title1").text(mydata[id].title1);
        $("#subtitle1").text(mydata[id].subtitle1);
        $("#header1").text(mydata[id].header1);
        $("#image1").attr("src", mydata[id].image1);
        $("#image1").attr("alt", mydata[id].imageAlt1);
        $("#discription1").text(mydata[id].discription1);
        $("#header2").text(mydata[id].header2);
        $("#image2").attr("src", mydata[id].image2);
        $("#image2").attr("alt", mydata[id].imageAlt2);
        $("#discription2").text(mydata[id].discription2);
        $("#header3").text(mydata[id].header3);
        $("#image3").attr("src", mydata[id].image3);
        $("#image3").attr("alt", mydata[id].imageAlt3);
        $("#discription3").text(mydata[id].discription3);
        $("#header4").text(mydata[id].header4);
        $("#image4").attr("src", mydata[id].image4);
        $("#image4").attr("alt", mydata[id].imageAlt4);
        $("#discription4").text(mydata[id].discription4);
        $("#header5").text(mydata[id].header5);
        $("#image5").attr("src", mydata[id].image5);
        $("#image5").attr("alt", mydata[id].imageAlt5);
        $("#discription5").text(mydata[id].discription5);
        console.log(mydata);
        });
    });
