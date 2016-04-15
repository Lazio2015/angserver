module.exports = function(app, db){

    var userDAO     = require('../dao/UserDAO')(db);

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
            userDAO.findUserByEmail(req.body.email, function(err, user){
                if (err) {
                    console.error(err);
                    return next(err);
                }

                if (null == user){
                    return next(401, 'user not found');
                }

                if (!userDAO.checkPassword(req.body.password, user.password)){
                    return next(401, 'bbb');
                }

                res.status(200).json(user);
                //authorize

            });
        }
    };
};
