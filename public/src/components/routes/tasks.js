/**
 * Created by lenur on 4/1/16.
 */

function TasksRouterConfig($stateProvider) {

    var states = [];

    states.push({
        name: 'project.tasks'
        , sticky: true
        , deepStateRedirect: true
        , url: '/tasks'
        , controller: 'TasksCtrl'
        , controllerAs: 'tasks'
        , templateUrl: '../tpls/pages/tasks/tasks.html'
    });

    states.push({
        name: 'project.tasks.add'
        , sticky: true
        , deepStateRedirect: true
        , url: '/add'
        , controller: 'TasksAddCtrl'
        , controllerAs: 'tasksAdd'
        , templateUrl: '../tpls/pages/tasks/add/add.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}
