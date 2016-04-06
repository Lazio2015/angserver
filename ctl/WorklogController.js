/**
 * Created by lenur on 4/6/16.
 */
module.exports = function(app, db){

    var worklogDAO = require('../dao/WorklogDAO')(db);

    return {
        getAllByTaskId: function(req, res, next){
            worklogDAO.findAllByTaskId(req.params.id, function(err, worklogs){
                if (err) {
                    return next(err);
                }

                res.json(worklogs);
            });
        }
    };
};