/**
 * Created by lenur on 3/31/16.
 */

function TasksService($http, SystemConfig) {
    var TasksService = {};

    TasksService._$http = $http;
    TasksService.url = 'tasks';

    TasksService.findById = function(taskId) {
        return TasksService._$http.get(SystemConfig.url + TasksService.url + '/' + taskId);
    };

    TasksService.delete = function(taskId) {
        return TasksService._$http.delete(SystemConfig.url + TasksService.url + '/' + taskId);
    };

    TasksService.add = function(task) {
        console.log('5', task);
        console.log('5', $.param(task));
        return TasksService._$http.post(SystemConfig.url + TasksService.url, task);
    };

    return TasksService;
}