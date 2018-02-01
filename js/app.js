angular.module("findMusicApp", ["ngRoute", "Route", "UserService", "UserDataService"]);

angular.module("findMusicApp").config(function($locationProvider, $routeProvider) {$locationProvider.html5Mode(true);
    
    $routeProvider.when("/project_1", {
        templateUrl: "/templates/home.html",
        controller: "Post"
    })
    .when("/copyright", {
        templateUrl: "/templates/copyright.html",
    })
    .when("/contact", {
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
    .when("/find_artists/:id", {
        templateUrl: "/templates/find_artists.html",
    })
    // .when("/find_artists", {
    //     templateUrl: "/templates/pagedata/main_template_page.html",
    // })
    .when("/techno", {
        templateUrl: "/templates/genres/techno.html",
    })
    .when("/trance", {
        templateUrl: "/templates/genres/trance.html",
    })
    .when("/acid_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/acid_trance.html",
    })
    .when("/anthem_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/anthem_trance.html",
    })
    .when("/classic_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/classic_trance.html",
    })
    .when("/dream_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/dream_trance.html",
    })
    .when("/euro_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/euro_trance.html",
    })
    .when("/futurepop", {
        templateUrl: "/templates/genres/sub-genres/trance/futurepop.html",
    })
    .when("/goa_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/goa_trance.html",
    })
    .when("/hard_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/hard_trance.html",
    })
    .when("/hardstyle", {
        templateUrl: "/templates/genres/sub-genres/trance/hardstyle.html",
    })
    .when("/ibiza_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/ibiza_trance.html",
    })
    .when("/neo_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/neo_trance.html",
    })
    .when("/progressive_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/progressive_trance.html",
    })
    .when("/psychedelic_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/psychedelic_trance.html",
    })
    .when("/tech_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/tech_trance.html",
    })
    .when("/trance_fusion", {
        templateUrl: "/templates/genres/sub-genres/trance/trance_fusion.html",
    })
    .when("/vocal_trance", {
        templateUrl: "/templates/genres/sub-genres/trance/vocal_trance.html",
    })
    .when("/house", {
        templateUrl: "/templates/genres/house.html",
    })
    .when("/rave", {
        templateUrl: "/templates/genres/rave.html",
    })
    .when("/dubstep", {
        templateUrl: "/templates/genres/dubstep.html",
    })
    .when("/todo/edit/:id", {
        templateUrl: "templates/edit-todo.html",
        controller: "EditTodoController"
    });
});