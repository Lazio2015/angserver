/**
 * Created by lenur on 4/5/16.
 */

function WorklogsListCtrl($state, TasksService) {
    var worklogsList = this;

    var taskId = $state.params.taskId;

    worklogsList.list = function (id) {
        TasksService
            .getWorklogs(id)
            .then(function(response) {
                console.log('worklogs', response);
            });
    };

    worklogsList.resolve = function() {
        worklogsList.list(taskId);
    };

    worklogsList.resolve();

}