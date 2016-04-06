/**
 * Created by lenur on 4/5/16.
 */
function TasksViewDashboardCtrl($state, TasksService) {
    var tasksViewDashboard = this;

    tasksViewDashboard.task = {};
    tasksViewDashboard.worklogs = {}

    tasksViewDashboard.backToList = function() {
        $state.go('project.tasks.list');
    };

    tasksViewDashboard.loadTask = function(taskId) {
        TasksService
            .findById(taskId)
            .success(function(data){
                tasksViewDashboard.task = data;
            })
            .error(function(){

            })
    };

    tasksViewDashboard.loadWorklogs = function(taskId) {
        TasksService
            .getWorklogs(taskId)
            .success(function(data){
                tasksViewDashboard.worklogs = data;
            })
            .error(function(){

            })
    };

    tasksViewDashboard.resolve = function() {
        tasksViewDashboard.loadTask($state.params.taskId);
        tasksViewDashboard.loadWorklogs($state.params.taskId);
    };

    tasksViewDashboard.resolve();

}