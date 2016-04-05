/**
 * Created by lenur on 4/1/16.
 */

function ProjectsRouterConfig($stateProvider) {

    var states = [];

    states.push({
        name: 'projects'
        , sticky: true
        , deepStateRedirect: true
        , url: '/projects'
        , controller: 'ProjectsCtrl'
        , controllerAs: 'projects'
        , templateUrl: '../tpls/pages/projects/projects.html'
    });

    states.push({
        name: 'projects.list'
        , sticky: true
        , deepStateRedirect: true
        , url: '/list'
        , controller: 'ProjectsListCtrl'
        , controllerAs: 'projectsList'
        , templateUrl: '../tpls/pages/projects/list/list.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}