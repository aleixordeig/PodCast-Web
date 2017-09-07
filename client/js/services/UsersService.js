angular.module('podcast')

    .factory('UsersService', function($http, $rootScope) {


        function getData() {
            var url = 'api/user/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    if (!response.data.firstname) return false
                    return true
                })
        }

        var getInfo = function() {
            var url = 'api/user/' + $rootScope.userId
            return $http.get(url)
                .then(function(response) {
                    return response.data
                })
        }


        var updateProfile = function() {
            var url = '/api/user/update'
            return $http.put(url)
                .then(function(response) {
                })
        }

        var updateImage = function(image) {
            var url = '/api/user/' + $rootScope.userId + '/update/image'
            image = image.toString()            
            return $http.put(url, {image})
                .then(function(response) {
                    window.location.reload()
                })
        }


        return {
            getInfo,
            getLanguages,
            updateProfile,
            getData,
            updateImage
        }
    })