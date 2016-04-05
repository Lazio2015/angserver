/**
 * Created by lenur on 4/5/16.
 */

function ProjectsListCtrl(ProjectsService) {
    var projectsList = this;
    projectsList.items = [];

    projectsList.getProjects = function() {
        ProjectsService.list()
            .then(function(resp){
                projectsList.items = resp.data;
            })
    };

    projectsList.resolve = function() {
        projectsList.getProjects();
    };

    projectsList.resolve();
}