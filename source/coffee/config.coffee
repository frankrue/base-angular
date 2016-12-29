module.exports = (angular, defaults) ->

  angular.module 'app'
    .config ($urlRouterProvider, $stateProvider) ->
      "ngInject"
      $urlRouterProvider.otherwise '/'
      return
