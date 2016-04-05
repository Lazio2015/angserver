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
    .constant('ProjectRouterConfig', ProjectRouterConfig)
    .constant('TasksRouterConfig', TasksRouterConfig)

    .config(AppConfig)
    .run(AppRunTime)

    //base
    .controller('AppCtrl', AppCtrl)
    .controller('HomeCtrl', HomeCtrl)

    //projects
    .controller('ProjectsCtrl', ProjectsCtrl)
    .controller('ProjectsListCtrl', ProjectsListCtrl)
    .controller('ProjectViewCtrl', ProjectViewCtrl)
    .factory('ProjectsService', ProjectsService)

    //tasks
    .controller('TasksCtrl', TasksCtrl)
    .controller('TasksListCtrl', TasksListCtrl)
    .controller('TasksAddCtrl', TasksAddCtrl)
    .controller('TasksEditCtrl', TasksEditCtrl)
    .controller('TasksViewCtrl', TasksViewCtrl)
    .controller('TasksViewDashboardCtrl', TasksViewDashboardCtrl)
    .factory('TasksService', TasksService)

    //worklogs
    .controller('WorklogsCtrl', WorklogsCtrl)
    .controller('WorklogsListCtrl', WorklogsListCtrl)
    .factory('WorklogsService', WorklogsService)
;

