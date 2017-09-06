angular.module('podcast')
.factory('authCheck', function (StorageService) {
  return {
    request: function (config) {
      const token = StorageService.getToken()
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    }
  }
})

