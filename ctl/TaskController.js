module.exports = function(app, db){

    //console.log(db);

    var taskDAO = require('../dao/TaskDAO')(db);

    return {
        getById: function(req, res, next){
            taskDAO.findById(req.params.id, function(err, task){
                if (err) {
                    return next(err);
                }

                if (null == task)
                    return res.sendStatus(404, 'Task not found');

                res.json(task);
            });
        },

        getAll: function(req, res){
            taskDAO.findAll(function(err, tasks){
                if (err) {
                    return next(err);
                }

                res.json(tasks);
            });
        },

        getAllByProjectId: function(req, res, next){
            taskDAO.findAllByProjectId(req.params.id, function(err, tasks){
                if (err) {
                    console.error(err);
                    return next(err);
                }

                res.json(tasks);
            });
        },

        deleteById: function(req, res){
            taskDAO.deleteById(req.params.id, function(err){
                if (err) {
                    return next(err);
                }

                res.sendStatus(204);
            });
        },

        add: function(req, res){
            taskDAO.add(req.body, function(err, task){
                if (err) {
                    return next(err);
                }

                res.json(task);
            });
        }
    };
};
