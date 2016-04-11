/**
 * Created by lenur on 4/1/16.
 */
function AppCtrl($state, ProjectsService) {

    var app = this;
    app.currentPage = 'home';

    app.goUrl = function (url) {
        app.currentPage = url;
        $state.go(url);
    };
    //
    ////
    //app.projects = [];
    //
    //app.getProjects = function() {
    //    ProjectsService.list()
    //        .then(function(resp){
    //            console.log(resp);
    //            app.projects = resp.data;
    //        })
    //};
    //
    //app.resolve = function() {
    //    app.getProjects();
    //};
    //
    //app.resolve();
}