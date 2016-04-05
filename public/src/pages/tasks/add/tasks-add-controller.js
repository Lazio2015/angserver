/**
 * Created by lenur on 4/1/16.
 */

function TasksAddCtrl($state, ProjectsService, TasksService) {
    var tasksAdd = this;

    tasksAdd.projectId = $state.params.projectId;

    tasksAdd.model = {
        name: '',
        projectId: 1,
        creatorId: null,
        assignedId: null,
        estimatedTime: 0
    };

    tasksAdd.projects   = { items: [] };
    tasksAdd.assigned   = { items: [] };
    tasksAdd.created    = { items: [] };

    tasksAdd.loadUsers = function() {
        ProjectsService
            .getUsers(tasksAdd.projectId)
            .then(function(response) {
                tasksAdd.assigned.items = response.data;
                tasksAdd.created.items = response.data;
            });
    };

    tasksAdd.loadProjects = function() {
        ProjectsService
            .list()
            .then(function(response) {
                tasksAdd.projects.items = response.data;

                if (tasksAdd.projectId) {
                    tasksAdd.projects.model = angular.findObjectById(tasksAdd.projects.items, tasksAdd.projectId);
                }
            });
    };

    tasksAdd.submit = function() {

        if (!angular.isUndefinedOrNull(tasksAdd.projects.model)) {
            tasksAdd.model.projectId = tasksAdd.projects.model.id;
        }

        if (!angular.isUndefinedOrNull(tasksAdd.assigned.model)) {
            tasksAdd.model.assignedId = tasksAdd.assigned.model.id;
        }

        if (!tasksAdd.model.name) {
            return alert('Task name cannot be empty!');
        }

        TasksService.add(tasksAdd.model)
            .then(function(resp){
                console.log(resp);
            });

        $state.go('^.tasks');
    };

    tasksAdd.resolve = function(){
        tasksAdd.loadProjects();
        tasksAdd.loadUsers();
    };

    tasksAdd.resolve();
}