module.exports = (angular) ->

  moduleName = 'app.core.router'

  angular.module moduleName, []
    .provider 'RouterHelperService', (
      $locationProvider
      $stateProvider
      $urlRouterProvider
    ) ->
      "ngInject"

      @$get = ($state) ->
        "ngInject"

        configureStates = (states, otherwisePath) ->
          $stateProvider.state state.state, state.config for state in states
          if otherwisePath and !hasOtherwise
            hasOtherwise = true
            $urlRouterProvider.otherwise otherwisePath

        getStates = () -> $state.get()

        hasOtherwise = false

        return {
          configureStates: configureStates
          getStates: getStates
        }
      @

  moduleName
