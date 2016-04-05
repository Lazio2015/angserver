/**
 * Created by lenur on 4/1/16.
 */

function TasksCtrl($state) {
    var tasks = this;

    if ($state.current.url === "/tasks") {
        $state.go('.list');
    }

    tasks.resolve = function() {

    };

    tasks.resolve();
}