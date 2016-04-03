/**
 * Created by lenur on 4/1/16.
 */

function TasksCtrl($state, ProjectsService, TasksService) {
    var tasks = this;
    tasks.items = [];

    tasks.getList = function() {
        ProjectsService.getTasks($state.params.projectId)
            .then(function(resp){
                tasks.items = resp.data;
                console.log('taski', resp);
            });
    };

    tasks.remove = function(id) {
        if (confirm('Do you want to delete this task?')) {
            TasksService.delete(id)
                .then(function(){
                    //TODO: del task row
                });
        }
    };

    tasks.resolve = function() {
        tasks.getList();
    };

    tasks.resolve();
}