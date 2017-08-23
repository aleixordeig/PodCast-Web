angular.module('podcast')
	.controller('GreetingController', ['$scope', function($scope) {
  		$scope.greeting = 'Hola!';
	}]);