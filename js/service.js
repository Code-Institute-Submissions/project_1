angular.module("UserService", [])
    .factory("UserAPIService", function($http) {
        
        UserAPIService = {
            callAPI: function(url, data) {
                return $http.post(url, data);
            }
        };
        return UserAPIService;
    });
    
angular.module("UserDataService", [])
    .factory("UserDataAPIService", function($http) {
        UserDataAPIService = {
            getEvents: function(url, data, token) {
                let header = "Authorization: JWT " + token;
                return $http.get(url, {params:{"username": data}}, header);
            },
            createEvent: function(url, data, token) {
                let header = "Authorization: JWT " + token;
                return $http.post(url, data, header);
            },
            editEvent: function(url, data, token) {
                let header = "Authorization: JWT " + token;
                return $http.put(url, data, header);
            },
            deleteEvent: function(url, token) {
                let header = "Authorization: JWT " + token;
                return $http.delete(url, header);
            }
        };
        return UserDataAPIService;
    });