/**
 * Created by lenur on 3/31/16.
 */

module.exports = function(conn) {

   var util = require('util');

    return {
        findById: function(id, cb){
            const QUERY_TPL = "SELECT * FROM `tasks` WHERE id=%d LIMIT 1";
            var query = util.format(QUERY_TPL, id);

            conn.query(query, function(err, tasks){
                if (err)
                    return cb(err);

                cb(null, tasks.length ? tasks[0] : null);
            });
        },

        findAll: function(cb){
            const QUERY_TPL = "SELECT * FROM `tasks`";
            var query = util.format(QUERY_TPL);

            conn.query(query, function(err, tasks){
                if (err)
                    return cb(err);

                cb(null, tasks);
            });
        },

        findAllByProjectId: function(projectId, cb){
            const QUERY_TPL =
                    "SELECT t.*, u.`first_name` AS user_first_name, u.`last_name` AS user_last_name"
                + " FROM `tasks` AS t INNER JOIN users AS u ON t.assigned_to = u.id"
                + " WHERE t.`project_id`=%d"
                ;

            var query = util.format(QUERY_TPL, projectId);

            conn.query(query, function(err, tasks){
                if (err)
                    return cb(err);

                cb(null, tasks);
            });
        },

        deleteById: function(id, cb){
            const QUERY_TPL = "DELETE FROM `tasks` WHERE id=%d LIMIT 1";
            var query = util.format(QUERY_TPL, id);

            conn.query(query, cb);
        },

        add: function(task, cb) {
            const QUERY_TPL = "INSERT INTO `tasks` (name, project_id, creator_id, assigned_to)"
            + " VALUES('%s', %d, %d, %d)";

            task.assignedId = task.assignedId || 1;
            var query = util.format(QUERY_TPL, task.name, task.projectId, 1, task.assignedId);

            conn.query(query, function(err, data){
                if (err)
                    return cb(err);

                task.id = data.insertId;

                cb(null, task);
            });
        },

        update: function(task, cb) {
            const QUERY_TPL = "UPDATE `tasks` SET `name`='%s', `project_id`=%d, `assigned_to`=%d, `estimated_time`=%d WHERE `id`=%d";

            task.assignedId = task.assignedId || 1;
            task.id = task.id || 0;

            var query = util.format(QUERY_TPL, task.name, task.projectId, task.assignedId, parseInt(task.estimatedTime), task.id);

            conn.query(query, function(err, task) {
                if (err) {
                    console.error(err);
                    return cb(err);
                }

                cb(null, task);
            });
        }

    };

};