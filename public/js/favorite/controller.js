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
      url: 'http://www.skylabcoders.com/es/'
    }, 
    {
      id: 789,
      name: 'MOTOROLA XOOM™',
      url: 'https://giphy.com/gifs/artestpage-nico-l41lRGoXJJSWyGoFy'
    }
  ];
	$scope.remove = function(id) { 
	  $scope.favourites = $scope.favourites.filter(function(favourite) {
	  	 return favourite.id !== id
	  });
	}
}]);

