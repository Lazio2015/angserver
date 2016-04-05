/**
 * Created by lenur on 4/5/16.
 */

function WorklogsCtrl($state) {
    var worklogs = this;

    if ($state.current.url === '/worklogs') {
        $state.go('.list');
    }

}