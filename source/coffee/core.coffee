module.exports = (angular, defaults) ->
  dependencies = [

    # vendors who return their module names
    require 'angular-animate'
    require 'angular-ui-router'
    require 'angular-ui-bootstrap'

    # vendors who do not return their module names
    (() -> require('angular-bootstrap-datetimepicker'); return 'ui.bootstrap.datetimepicker')()

    # our own sub-modules
    require('./services/DefaultsService')(angular, defaults)
    require('./services/RouterHelperService')(angular, defaults)

  ]
  
  angular.module 'app.core', dependencies
  'app.core'
