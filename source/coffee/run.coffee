module.exports = (angular) ->

  angular.module 'app'
    .run (
      $rootScope
    ) ->
      "ngInject"

      # set a $rootScope var
      $rootScope.myObject =
        status: 'started'
