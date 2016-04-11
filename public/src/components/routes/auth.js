/**
 * Created by lenur on 4/7/16.
 */
function AuthRouterConfig($stateProvider) {

    var states = [];
    states.push({
        name: 'login'
        , url: '/login'
        , controller: 'LoginCtrl'
        , controllerAs: 'login'
        , templateUrl: '../tpls/pages/auth/login/login.html'
    });

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}