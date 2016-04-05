/**
 * Created by lenur on 4/5/16.
 */

function ProjectRouterConfig($stateProvider) {
    var states = [];

    states.push({
        name: 'project'
        , sticky: true
        , deepStateRedirect: true
        , url: '/project/:projectId'
        , controller: 'ProjectViewCtrl'
        , controllerAs: 'projectView'
        , templateUrl: '../tpls/pages/projects/view/view.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}