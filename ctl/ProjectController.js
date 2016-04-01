module.exports = function(app, db){

    //console.log(db);

    var projectDAO = require('../dao/ProjectDAO')(db);

    return {
        getById: function(req, res, next){
            projectDAO.findById(req.params.id, function(err, project){
                if (err) {
                    return next(err);
                }

                if (null == project)
                    return res.sendStatus(404, 'Project not found');

                res.json(project);
            });
        },

        getAll: function(req, res){
            projectDAO.findAll(function(err, projects){
                if (err) {
                    return next(err);
                }

                res.json(projects);
            });
        }
    };
};
