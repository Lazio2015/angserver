/**
 * @author Lenur
 */

var auth = require('./middleware/auth');

module.exports = function(app, conn){
    var projectController = require('./ctl/ProjectController')(app, conn);
    var taskController = require('./ctl/TaskController')(app, conn);
    var userController = require('./ctl/UserController')(app, conn);
    var worklogController = require('./ctl/WorklogController')(app, conn);

    app.get('/projects/:id', auth, projectController.getById);
    app.get('/projects', projectController.getAll);
    app.get('/projects/:id/users', userController.getAllByProjectId);
    app.get('/projects/:id/tasks', taskController.getAllByProjectId);

    app.get('/tasks/:id', taskController.getById);
    app.get('/tasks', taskController.getAll);
    app.delete('/tasks/:id', taskController.deleteById);
    app.post('/tasks', taskController.add);
    app.put('/tasks', taskController.edit);
    app.get('/tasks/:id/worklogs', worklogController.getAllByTaskId);

    app.post('/login', userController.login);

};