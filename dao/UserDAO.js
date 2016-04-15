/**
 * Created by lenur on 3/31/16.
 */

module.exports = function(conn) {

   var util = require('util');
   var crypto = require('crypto');

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
        },

        findUserByEmail: function(email, cb){
            const QUERY_TPL = "SELECT * FROM `users` WHERE `email`='%s' LIMIT 1";

            var query = util.format(QUERY_TPL, email);

            conn.query(query, function(err, users) {
                if(err)
                    return cb(err);

                cb(null, users.length ? users[0] : null);

            })
        },

        encryptPassword: function(password){
            return crypto.createHash('md5').update(password).digest("hex");
        },

        checkPassword: function(plainPassword, hash){
            return this.encryptPassword(plainPassword) == hash;
        },
    };

};