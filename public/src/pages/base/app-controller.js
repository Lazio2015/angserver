/**
 * Created by lenur on 4/1/16.
 */
function AppCtrl($state) {

    var app = this;
    app.currentPage = 'home';

    app.goUrl = function (url) {
        app.currentPage = url;
        $state.go(url);
    };
}