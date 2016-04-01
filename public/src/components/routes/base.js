/**
 * Created by lenur on 4/1/16.
 */

function BaseRouterConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    var states = [];

    states.push({
        name: 'home'
        , sticky: true
        , deepStateRedirect: true
        , url: '/home'
        , controller: 'HomeCtrl'
        , controllerAs: 'home'
        , templateUrl: '../tpls/pages/base/home.html'
    });


    //html5 mode
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');

    //default url
    $urlRouterProvider.otherwise("/home");

    angular.forEach(states, function(state) {
        $stateProvider.state(state);
    });
}
