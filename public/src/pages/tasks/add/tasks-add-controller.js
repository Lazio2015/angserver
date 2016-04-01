/**
 * Created by lenur on 4/1/16.
 */

function TasksAddCtrl(TasksService) {
    var tasksAdd = this;

    tasksAdd.add = function(task) {
        TasksService.add(task)
            .then(function(resp){
                console.log(resp);
            });
    };

    tasksAdd.resolve = function(){
        console.log('add');
     //   tasksAdd.add();
    };

    tasksAdd.resolve();
}