angular.module('podcast')
	.controller('registerUser', ['$scope', function($scope){
		$scope.info = {
			user: '',
			email: '',
			password: '',
			confirm: ''
		}

		$scope.login = function (){
			console.log('RUUUUUUUUUNNNNNNNNN!!!!!!!!!')
		}
}]);




