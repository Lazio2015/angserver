/**
 * Created by lenur on 4/6/16.
 */

function WorklogsRouterConfig($stateProvider) {
    var states = [];

    states.push({
        name: 'project.tasks.view.worklogs'
        , sticky: true
        , deepStateRedirect: true
        , url: '/worklogs'
        , controller: 'WorklogsCtrl'
        , controllerAs: 'worklogs'
        , templateUrl: '../tpls/pages/worklogs/worklogs.html'
    });

    states.push({
        name: 'project.tasks.view.worklogs.list'
        , sticky: true
        , deepStateRedirect: true
        , url: '/list'
        , controller: 'WorklogsListCtrl'
        , controllerAs: 'worklogsList'
        , templateUrl: '../tpls/pages/worklogs/list/list.html'
    });

    states.push({
        name: 'project.tasks.view.worklogs.add'
        , sticky: true
        , deepStateRedirect: true
        , url: '/add'
        , controller: 'WorklogsAddCtrl'
        , controllerAs: 'worklogsAdd'
        , templateUrl: '../tpls/pages/worklogs/add/add.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}