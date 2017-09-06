angular.module('podcast', ['ngRoute', 'toastr', 'angular-jwt'])
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('authCheck')
  })
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise('/login')
  })
  .run(function ($rootScope, $location, StorageService, toastr, authService) {
    if (authService.isLoggedIn()) {
      const token = StorageService.getToken()
      authService.setCredentials(token)
    }

    $rootScope.$on('$routeChangeStart', function (event, next, toastr, current) {
      console.log('route has changed')
      if (next && next.secure) {
        console.log('this route is secured!!')
        if (!authService.isLoggedIn()) {
          $location.path('/login')
        }
      }
    })
  })

  // .run(function($window, $location, $rootScope, jwtHelper) {
  //   if( $window.localStorage.getItem('authToken')) {
  //     const token = $window.localStorage.getItem('authToken')
  //     const tokenPayload = jwtHelper.decodeToken(token)
  //     $rootScope.loggedUser = tokenPayload.email
  //     $rootScope.idUser = tokenPayload.id
  //     console.log('$rootScope.loggedUser ->', $rootScope.loggedUser)
  //     console.log('$rootScope.idUser ->', $rootScope.idUser)
  //   } else {
  //     const url = $location.absUrl()
  //     const token = url.split('/').pop()
  //     console.log(token)
  //     $window.localStorage.setItem('authToken', token)
  //   }
  // })
   
