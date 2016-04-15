/**
 * Created by lenur on 4/7/16.
 */
function LoginCtrl(AuthService) {
    var login = this;

    login.user = {};

    login.submit = function() {
        console.log(login.user);

        AuthService.login(login.user)
            .then(function(){

            });
    }
}