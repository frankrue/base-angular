module.exports = (angular, defaults) ->

  moduleName = 'app.core.defaults'
  angular.module moduleName, []
    .factory 'DefaultsService', () -> require '../defaults'

  return moduleName
