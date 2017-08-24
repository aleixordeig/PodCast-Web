angular.module('podcast')
  .controller('loginUser', ['$scope', function($scope){
    $scope.info = {
      user: '',
      password: ''
    }

    $scope.login = function (){
      console.log('Welcome to ......')
    }
}]);

