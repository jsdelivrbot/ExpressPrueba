var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'bc2c5521733440',
    password: '395ef895',
    database: 'heroku_8c89e0f2e81709d',
    debug: false
});

exports.prueba = function (req, res) {

    pool.getConnection(function (err, connection) {
        if (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        console.log('Connection as ID: ' + connection.threadId);

        connection.query(`SELECT * FROM heroku_8c89e0f2e81709d.tblmovies`, function (err, rows) {
            connection.release();
            if (!err) {
                //res.json(rows);
            }
        });

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}