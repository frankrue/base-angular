require 'angular-bootstrap-datetimepicker' # this module does not return its name

module.exports = (angular, defaults) ->

  modules = [

    # our own app sub-modules
    require('./core')(angular, defaults)
    require('./controllers/Dashboard')(angular, defaults)
    require('./controllers/Preferences')(angular, defaults)
    require('./controllers/About')(angular, defaults)
    require('./controllers/Services')(angular, defaults)

  ]

  # establish the basic app
  angular.module 'app', modules

  # add config and run blocks
  require('./config')(angular)
  require('./run')(angular)

  # attach to the DOM
  angular.bootstrap document, [ 'app' ]
