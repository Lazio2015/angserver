/**
 * Created by lenur on 4/1/16.
 */

function ProjectViewCtrl($state, ProjectsService) {
    var projectView = this;
    projectView.project = {};

    projectView.getProject = function() {
        ProjectsService.findById($state.params.projectId)
            .then(function(resp){
                projectView.project = resp.data;
            })
    };

    projectView.resolve = function() {
        projectView.getProject();
    };

    projectView.resolve();
}