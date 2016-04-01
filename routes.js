/**
 * @author Lenur
 */

module.exports = function(app, conn){
    var projectController = require('./ctl/ProjectController')(app, conn);
    var taskController = require('./ctl/TaskController')(app, conn);

    app.get('/projects/:id', projectController.getById);
    app.get('/projects', projectController.getAll);

    app.get('/tasks/:id', taskController.getById);
    app.get('/tasks', taskController.getAll);
    app.get('/projects/:id/tasks', taskController.getAllByProjectId);
    app.delete('/tasks/:id', taskController.deleteById);
    app.post('/tasks', taskController.add);
};