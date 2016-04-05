/**
 * Created by lenur on 3/31/16.
 */
angular.module('nodemine', [
          'ngStorage'
        , 'ui.router'
        , 'ui.bootstrap'
        , 'ui.bootstrap.tpls'
        , 'ui.select'
])

    .constant('SystemConfig', {
        url: 'http://localhost:3000/api/',
        flag: true
    })

    .constant('BaseRouterConfig', BaseRouterConfig)
    .constant('ProjectsRouterConfig', ProjectsRouterConfig)
    .constant('TasksRouterConfig', TasksRouterConfig)

    .config(AppConfig)
    .run(AppRunTime)

    //base
    .controller('AppCtrl', AppCtrl)
    .controller('HomeCtrl', HomeCtrl)

    //projects
    .controller('ProjectsCtrl', ProjectsCtrl)
    .controller('ProjectViewCtrl', ProjectViewCtrl)
    .factory('ProjectsService', ProjectsService)

    //tasks
    .controller('TasksCtrl', TasksCtrl)
    .controller('TasksAddCtrl', TasksAddCtrl)
    .factory('TasksService', TasksService)


;

