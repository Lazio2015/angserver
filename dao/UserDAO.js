/**
 * Created by lenur on 3/31/16.
 */

module.exports = function(conn) {

   var util = require('util');

    return {
        findAllByProjectId: function(projectId, cb){
            const QUERY_TPL =
                    "SELECT `users`.* FROM `users_projects`"
                + " INNER JOIN `users`  ON `users_projects`.`user_id` = `users`.`id`"
                + " WHERE `users_projects`.`project_id`=%d"
                ;

            var query = util.format(QUERY_TPL, projectId);

            conn.query(query, function(err, users){
                if (err)
                    return cb(err);

                cb(null, users);
            });
        }
    };

};