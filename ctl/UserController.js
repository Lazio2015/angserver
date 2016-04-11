module.exports = function(app, db){

    var userDAO = require('../dao/UserDAO')(db);

    return {
        getAllByProjectId: function(req, res, next){
            userDAO.findAllByProjectId(req.params.id, function(err, users){
                if (err) {
                    console.error(err);
                    return next(err);
                }

                res.json(users);
            });
        },

        login: function(req, res, next){
            userDAO.login(req.body, function(err, user) {
                if (err) {
                    console.log(err);
                    return next(err);
                }

                res.statusCode(400);
            });
        }
    };
};
