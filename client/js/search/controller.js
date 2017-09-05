angular.module('podcast')
  .controller('FavouriteController', ['$scope', function($scope) {
      $scope.favourites = [
    {
      id: 123,
      name: 'Nexus S',
      url: '/episodes',
      text: 'Welcome to the routine of creating of angular and well why are you I still here' 
    }, 
    {
      id: 456,
      name: 'Motorola XOOM™ with Wi-Fi',
      url: 'http://www.skylabcoders.com/es/',
      text: 'Welcome to the routine of creating of angular and well why are you I still here' 
    }, 
    {
      id: 789,
      name: 'MOTOROLA XOOM™',
      url: 'https://giphy.com/gifs/artestpage-nico-l41lRGoXJJSWyGoFy',
      text: 'Welcome to the routine of creating of angular and well why are you I still here' 
    }
  ];
  $scope.remove = function(id) { 
    $scope.favourites = $scope.favourites.filter(function(favourite) {
       return favourite.id !== id
    });
  }

  $scope.hasResults = function () {
    if($scope.favourites.length > 0){
      return true
    } else {
      false
    }
  } 


}]);