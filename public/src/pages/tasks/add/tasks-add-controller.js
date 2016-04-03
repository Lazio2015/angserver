/**
 * Created by lenur on 4/1/16.
 */

function TasksAddCtrl($state, TasksService) {
    var tasksAdd = this;

    tasksAdd.model = {
        name: '',
        project_id: 1,
        creator_id: 1,
        assigned_to: 1
    };

    tasksAdd.submit = function(){

        if (!tasksAdd.model.name) {
            return alert('Task name cannot be empty!');
        }

        TasksService.add(tasksAdd.model)
            .then(function(resp){
                console.log(resp);
            });

        $state.go('^.tasks');
    };

    tasksAdd.resolve = function(){
     //   tasksAdd.add();
    };

    tasksAdd.resolve();
}