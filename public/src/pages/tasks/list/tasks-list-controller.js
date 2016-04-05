/**
 * Created by lenur on 4/5/16.
 */

/**
 * Created by lenur on 4/1/16.
 */

function TasksListCtrl($state, ProjectsService, TasksService) {
    var tasksList = this;
    tasksList.items = [];

    tasksList.getList = function() {
        ProjectsService.getTasks($state.params.projectId)
            .then(function(resp){
                tasksList.items = resp.data;
                console.log('taski', resp);
            });
    };

    tasksList.remove = function(id) {
        if (confirm('Do you want to delete this task?')) {
            TasksService.delete(id)
                .then(function(){
                    tasksList.items = angular.removeFromObjectArray(tasksList.items, id);
                });
        }
    };

    tasksList.edit = function(id) {
        $state.go('^.edit', { id: id});
    };

    tasksList.resolve = function() {
        tasksList.getList();
    };

    tasksList.resolve();
}