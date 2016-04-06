/**
 * Created by lenur on 3/31/16.
 */

function AppConfig(
    $locationProvider,
    $httpProvider,
    $stateProvider,
    $urlRouterProvider)
{

    $httpProvider.interceptors.push(function ($q) {
        return {
            'response': function (response) {
                //up to 300
                if (response.status == 200) {
                    //console.log('OK');
                }
                return response;
            },
            'responseError': function (rejection) {
                if(rejection.status === 401) {
                    location.reload();
                }
                return $q.reject(rejection);
            }
        };
    });

    BaseRouterConfig($stateProvider, $urlRouterProvider, $locationProvider);
    ProjectsRouterConfig($stateProvider);
    ProjectRouterConfig($stateProvider);
    TasksRouterConfig($stateProvider);
    WorklogsRouterConfig($stateProvider);

    // setup x-www-form-urlencoded Content-Type
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;';
}