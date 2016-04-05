/**
 * Created by lenur on 4/5/16.
 */

function TasksViewCtrl($state) {
    var tasksView = this;

    if ($state.current.name === "project.tasks.view") {
        $state.go('.dashboard');
    }
}