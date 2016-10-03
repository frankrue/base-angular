module.exports = (angular, defaults) ->

  angular.module 'app'
    .config ($urlRouterProvider, $stateProvider) ->
      $urlRouterProvider.otherwise '/'
      return
