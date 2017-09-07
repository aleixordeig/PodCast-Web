angular.module('podcast')
  .controller('NavbarController', function ($scope, authService, $rootScope, $location) {
    $scope.isLogged = authService.isLoggedIn()
    function logout () {
      console.log('click')
      authService.logout()
      $location.path('/')
    }
    $scope.logout = logout
  })