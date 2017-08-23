angular.module('podcast')
	.controller('FavouriteController', ['$scope', function($scope) {
  		$scope.favourites = [
    {
      id: 123,
      name: 'Nexus S',
      url: '/episodes' 
    }, 
    {
      id: 456,
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, 
    {
      id: 789,
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
	$scope.remove = function(id) { 
	  $scope.favourites = $scope.favourites.filter(function(favourite) {
	  	 return favourite.id !== id
	  });
	}
}]);

