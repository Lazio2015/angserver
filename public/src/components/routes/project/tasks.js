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
        name: 'project.tasks.list'
        , sticky: true
        , deepStateRedirect: true
        , url: '/list'
        , controller: 'TasksListCtrl'
        , controllerAs: 'tasksList'
        , templateUrl: '../tpls/pages/tasks/list/list.html'
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

    states.push({
        name: 'project.tasks.edit'
        , sticky: true
        , deepStateRedirect: true
        , url: '/edit/:taskId'
        , controller: 'TasksEditCtrl'
        , controllerAs: 'tasksEdit'
        , templateUrl: '../tpls/pages/tasks/edit/edit.html'
    });

    states.push({
        name: 'project.tasks.view'
        , sticky: true
        , deepStateRedirect: true
        , url: '/view/:taskId'
        , controller: 'TasksViewCtrl'
        , controllerAs: 'tasksView'
        , templateUrl: '../tpls/pages/tasks/view/index.html'
    });

    states.push({
        name: 'project.tasks.view.dashboard'
        , sticky: true
        , deepStateRedirect: true
        , url: '/dashboard'
        , controller: 'TasksViewDashboardCtrl'
        , controllerAs: 'tasksViewDashboard'
        , templateUrl: '../tpls/pages/tasks/view/dashboard/index.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}
