/**
 * Created by lenur on 3/31/16.
 */

function ProjectsCtrl(ProjectsService) {
    var projects = this;
    projects.items = [];

    projects.getProjects = function() {
        ProjectsService.list()
            .then(function(resp){
                projects.items = resp.data;
            })
    };

    projects.resolve = function() {
        projects.getProjects();
    };

    projects.resolve();
}