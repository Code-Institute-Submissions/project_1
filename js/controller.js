$(document).ready(function() {
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
                lastEvent++
            }
    
            JSON.parse(localStorage.getItem("event")) || [];
            console.log($scope.events);
            
            
            
            // UserDataAPIService.getEvents(URL + "event/", $scope.username, $scope.authToken).then(function(results) {
            //     $scope.events = results.data || [];
            //     console.log($scope.events);
            // }).catch(function(err) {
            //     console.log(err);
            // });
            
            // $scope.editTodo = function(id) {
            //     $location.path("/todo/edit/" + id);
            // };
            // $scope.deleteTodo = function(id) {
            //     UserDataAPIService.deleteTodo(URL + "todo/" + id, $scope.authToken).then(function(results) {
            //         console.log(results);
            //         alert("Item Deleted Successfully");
            //     }).catch(function(err) {
            //         console.log(err);
            //     });
                
            // };
            // trackByFn = function(index, item) {
            // return index; // or item.id
            // }
            
            $scope.submitForm = function() {
                if ($scope.eventForm.$valid) {
                    $scope.event.username = $scope.username;
                    console.log($scope.event);
    
                    localStorage.setItem("event"+lastEvent, JSON.stringify($scope.event));
                        
                    // if ($scope.events.length == 0) {
                    //     $scope.events.push(JSON.stringify($scope.event));
                        
                    // } else if ($scope.events.length > 0) {
                    //     $scope.events.unshift(JSON.stringify($scope.event));
                    // } else {
                    //     console.log($scope.events);
                    // }
                    
                    // localStorage.setItem("event", $scope.events)
                    
                    
                    // UserDataAPIService.createEvent(URL + "event/", $scope.event, $scope.authToken).then(function(results) {
                    //     console.log(results);
                    // }).catch(function(err) {
                    //     console.log(err);
                    // });
                }
            };
        });
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // .controller("EditEvents", function($scope, $location, $routeParams, UserDataAPIService) {
            
        //     let id = $routeParams.id;
        //     let URL = "https://morning-castle-91468.herokuapp.com/";
            
        //     $scope.authToken = localStorage.getItem("authToken")
        //     $scope.username = localStorage.getItem("username")
            
        //     UserDataAPIService.getTodos(URL + "todo/" + id, $scope.username, $scope.authToken).then(function(results) {
        //         $scope.todo = results.data;
        //     }).catch(function(err) {
        //         console.log(err);
        //     });
            
        //     $scope.submitForm = function() {
        //         if ($scope.todoForm.$valid) {
        //             $scope.todo.username = $scope.username;
                    
        //             UserDataAPIService.editTodo(URL + "todo/" + id, $scope.todo, $scope.authToken).then(function(results) {
        //                 $location.path("/todo");
        //             }).catch(function(err) {
        //                 console.log(err);
        //             });
                    
                    
        //         } 
        //     };
            
        // });
});