
angular.module('podcast')
    .controller('usersController', function (Upload, $location, authService, jwtHelper, $scope, $rootScope, UsersService, StorageService, $window) {
      function setCredentials (token) {
        const tokenPayload = jwtHelper.decodeToken(token)
        $rootScope.loggedUser = tokenPayload.username
        $rootScope.userId = tokenPayload.id
      }

     if ($location.absUrl().indexOf('?token=') !== -1) {
        const token = $location.absUrl().split('=')[1].split('#')[0]
        StorageService.saveToken(token)
        setCredentials(token)
      }

      if (!authService.isLoggedIn()) {
          $window.location.href = '/login'
        }


      const token = StorageService.getToken()
      const tokenPayload = jwtHelper.decodeToken(token)
      $rootScope.userId = tokenPayload.id
        
      UsersService.getInfo($rootScope.userId)
        .then(function (response) {
          $scope.user = response
          if(!response.image) {
            UsersService.updateImage('http://res.cloudinary.com/djtxc60sj/image/upload/v1504710538/skytalks/default-user-image.png')
            $window.location.reload()
          }
        })


      $scope.fileSelected = (files) => {
        if (files && files.length) {
          $scope.file = files[0];
        }
      }

      $scope.uploadFile = function() {
        const url = '/upload'
        const file = $scope.file

        Upload.upload({ url, file })
          .success( ({imageLink}) => {
            $scope.image = imageLink
            console.log($scope.image)
            UsersService.updateImage(imageLink)
              .then(() => window.location.reload())
          })
      }
  })