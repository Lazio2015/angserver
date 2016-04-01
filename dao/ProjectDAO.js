module.exports = function(conn){

    var util = require('util');
    var faker = require('faker');

    return {
        findById: function(id, cb){
            const QUERY_TPL = "SELECT * FROM `projects` WHERE id=%d LIMIT 1";
            var query = util.format(QUERY_TPL, id);

            conn.query(query, function(err, projects){
                if (err)
                    return cb(err);

                var project = projects.length ? projects[0] : null;
                if (null != project){
                    project.avatar = faker.image.avatar();
                    console.dir(project.avatar);
                }

                cb(null, project);
            });
        },

        findAll: function(cb){
            const QUERY_TPL = "SELECT * FROM `projects`";
            var query = util.format(QUERY_TPL);

            conn.query(query, function(err, projects){
                if (err)
                    return cb(err);

                for (var i in projects){
                    projects[i].avatar = faker.image.avatar();
                }

                cb(null, projects);
            });
        }
    };
};
