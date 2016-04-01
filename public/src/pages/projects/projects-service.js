/**
 * Created by lenur on 3/31/16.
 */

function ProjectsService($http, SystemConfig) {
    var ProjectsService = {};

    ProjectsService._$http = $http;
    ProjectsService.url = 'projects';

    ProjectsService.list = function() {
        return ProjectsService._$http.get(SystemConfig.url + ProjectsService.url);
    };

    ProjectsService.findById = function(projectId) {
        return ProjectsService._$http.get(SystemConfig.url + ProjectsService.url + '/' + projectId);
    };

    ProjectsService.getTasks = function(projectId) {
        return ProjectsService._$http.get(SystemConfig.url + ProjectsService.url + '/' + projectId + '/tasks');
    };

    return ProjectsService;
}