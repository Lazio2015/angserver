/**
 * Created by lenur on 4/5/16.
 */
function TasksViewDashboardCtrl($state, TasksService) {
    var tasksViewDashboard = this;

    tasksViewDashboard.item = {};

    tasksViewDashboard.loadTasks = function() {
        TasksService
            .findById($state.params.id)
            .success(function(data){
                tasksViewDashboard.item = data;
            })
            .error(function(){

            })
    };

    tasksViewDashboard.resolve = function() {
        tasksViewDashboard.loadTasks();
    };

    tasksViewDashboard.resolve();

}