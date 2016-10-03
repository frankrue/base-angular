module.exports = (angular) ->

  angular.module 'app'
    .run (
      $rootScope
    ) ->

      # set a $rootScope var
      $rootScope.myObject =
        status: 'started'
