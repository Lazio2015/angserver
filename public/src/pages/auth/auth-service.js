/**
 * Created by lenur on 4/11/16.
 */


function AuthService($http, SystemConfig) {
    var AuthService = {};

    AuthService._$http = $http;
    AuthService.url = '';

    AuthService.login = function (user) {
        return AuthService._$http.post(SystemConfig.url + 'login', user);
    };

    return AuthService;
}