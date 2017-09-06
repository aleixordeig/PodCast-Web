angular.module('podcast', ['ngRoute', 'angular-jwt'])
  .run(function($window, $location, $rootScope, jwtHelper) {
    if( $window.localStorage.getItem('authToken')) {
      const token = $window.localStorage.getItem('authToken')
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.loggedUser = tokenPayload.email
      $rootScope.idUser = tokenPayload.id
      console.log('$rootScope.loggedUser ->', $rootScope.loggedUser)
      console.log('$rootScope.idUser ->', $rootScope.idUser)
    } else {
      const url = $location.absUrl()
      const token = url.split('/').pop()
      console.log(token)
      $window.localStorage.setItem('authToken', token)
    }
  })
   
