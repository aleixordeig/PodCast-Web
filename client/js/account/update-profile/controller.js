angular.module('podcast')
    .controller('updateProfile', function($scope, $http) {
        $scope.info = {
            name: 'John',
            lastName: 'Doe',
            email: 'emailg@gmail.com',
            company: 'unknow',
            website: '',
            address: 'Wall Street',
            city: 'Barcelona',
            country: '',
            username: 'one',
            password: '',
            confirm: ''
        }

        $scope.save = function() {
            console.log('Hello  AAAA World')
            console.log($scope.info.name)

            // TODO use $http to call api and save the profile
        }
});
