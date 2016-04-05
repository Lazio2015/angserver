/**
 * Created by lenur on 3/31/16.
 */

function ProjectsCtrl($state) {
    var projects = this;

    if ($state.current.url === '/projects') {
        $state.go('projects.list');
    }

    projects.resolve = function() {
        console.log('resolve');
    };

    projects.resolve();
}