angular.module("findMusicApp", ["ngRoute", "Route", "UserService", "UserDataService"]);

angular.module("findMusicApp").config(function($locationProvider, $routeProvider) {$locationProvider.html5Mode(true);
    
    $routeProvider.when("/project_1", {
        templateUrl: "/templates/home.html",
    })
    .when("/copyright", {
        templateUrl: "/templates/copyright.html",
    })
    .when("/contact",{
        templateUrl: "/templates/contact.html"
    })
    .when("/add", {
        templateUrl: "/templates/add.html",
        controller: "Post"
    })
    .when("/accounts/register", {
        templateUrl: "/templates/register.html",
        controller: "Register"
    })
    .when("/about", {
        templateUrl: "/templates/about.html",
    })
    .when("/find_music", {
        templateUrl: "/templates/find_music.html",
        controller: "Events"
    })
    .when("/find_artists/", {
        templateUrl: "/templates/find_artists.html",
        controller: "informationRouting"
    })
    .when("/find_artists/:id", {
        templateUrl: "/templates/find_artists.html",
        controller: "informationContent"
    })
    .when("/todo/edit/:id", {
        templateUrl: "templates/edit-todo.html",
        controller: "EditTodoController"
    });
});