/**
 * Created by lenur on 3/31/16.
 */

module.exports = function(conn) {

   var util = require('util');

    return {
        findAllByTaskId: function(taskId, cb){
            const QUERY_TPL =
                    "SELECT * FROM `worklogs`"
                    + " WHERE `task_id`=%d"
                ;

            var query = util.format(QUERY_TPL, taskId);

            conn.query(query, function(err, worklogs){
                if (err)
                    return cb(err);

                cb(null, worklogs);
            });
        }
    };

};