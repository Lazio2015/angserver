/**
 * Created by lenur on 3/31/16.
 */

function WorklogsService($http, SystemConfig) {
    var WorklogsService = {};

    WorklogsService._$http = $http;
    WorklogsService.url = 'worklogs';

    WorklogsService.findById = function(worklogId) {
        return WorklogsService._$http.get(SystemConfig.url + WorklogsService.url + '/' + worklogId);
    };

    WorklogsService.delete = function(worklogId) {
        return WorklogsService._$http.delete(SystemConfig.url + WorklogsService.url + '/' + worklogId);
    };

    WorklogsService.add = function(worklog) {
        return WorklogsService._$http.post(SystemConfig.url + WorklogsService.url, worklog);
    };

    WorklogsService.update = function(worklog) {
        return WorklogsService._$http.put(SystemConfig.url + WorklogsService.url, worklog);
    };

    return WorklogsService;
}