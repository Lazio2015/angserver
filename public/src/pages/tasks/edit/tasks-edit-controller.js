/**
 * Created by lenur on 4/1/16.
 */

function TasksEditCtrl($state, ProjectsService, TasksService) {
    var tasksEdit = this;

    tasksEdit.projectId = $state.params.projectId;
    tasksEdit.taskId = $state.params.id;

    tasksEdit.isLoaded = {
        assigned: false,
        projects: false
    };

    tasksEdit.model = {
        id: '',
        name: '',
        projectId: 1,
        creatorId: null,
        assignedId: null,
        estimatedTime: 0
    };

    tasksEdit.projects   = { items: [] };
    tasksEdit.assigned   = { items: [] };
    tasksEdit.created    = { items: [] };

    tasksEdit.loadUsers = function() {
        ProjectsService
            .getUsers(tasksEdit.projectId)
            .then(function(response) {
                tasksEdit.assigned.items = response.data;
                tasksEdit.created.items = response.data;
                if (tasksEdit.model.assignedId) {
                    tasksEdit.assigned.model = angular.findObjectById(tasksEdit.assigned.items, tasksEdit.model.assignedId);
                }
                tasksEdit.isLoaded.assigned = true;
            });
    };

    tasksEdit.loadProjects = function() {
        ProjectsService
            .list()
            .then(function(response) {
                tasksEdit.projects.items = response.data;
                if (tasksEdit.model.projectId) {
                    tasksEdit.projects.model = angular.findObjectById(tasksEdit.projects.items, tasksEdit.model.projectId);
                }
                tasksEdit.isLoaded.projects = true;
            });
    };

    tasksEdit.loadTasks = function(taskId) {
        TasksService
            .findById(taskId)
            .then(function(resp) {
                tasksEdit.model.id = resp.data.id;
                tasksEdit.model.name = resp.data.name;
                tasksEdit.model.estimatedTime = resp.data.estimated_time;
                tasksEdit.model.projectId = resp.data.project_id;
                tasksEdit.model.assignedId = resp.data.assigned_to;
            });
    };

    tasksEdit.submit = function() {

        if (!angular.isUndefinedOrNull(tasksEdit.projects.model)) {
            tasksEdit.model.projectId = tasksEdit.projects.model.id;
        }

        if (!angular.isUndefinedOrNull(tasksEdit.assigned.model)) {
            tasksEdit.model.assignedId = tasksEdit.assigned.model.id;
        }

        if (!tasksEdit.model.name) {
            return alert('Task name cannot be empty!');
        }

        TasksService.update(tasksEdit.model)
            .then(function(resp){
                console.log(resp);
            });

        $state.go('^.tasks');
    };

    tasksEdit.resolve = function(){
        tasksEdit.loadTasks(tasksEdit.taskId);
        tasksEdit.loadProjects();
        tasksEdit.loadUsers();
    };

    tasksEdit.resolve();
}