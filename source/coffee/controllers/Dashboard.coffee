module.exports = (angular) ->

  name = 'Dashboard'
  factory = (DefaultsService, $state) ->
    return

  ################################################################################
  # generic controller code [typically no need to modify]

  camelCaseName = "#{name[0].toLowerCase()}#{name.substr(1)}"
  moduleName = "app.#{camelCaseName}"
  angular.module moduleName, ['app.core']
    .controller "#{name}Controller", factory
    .config ($stateProvider) ->
      $stateProvider.state camelCaseName,
        url: "/"
        templateUrl: "views/#{camelCaseName}.html"
        controller: "#{name}Controller"

  return moduleName
