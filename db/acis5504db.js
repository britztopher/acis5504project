var mysql = require('mysql');

var MysqlDB = function(){

    var pool = mysql.createPool({
        database: process.env.AWS_MYSQL_DB|| 'acis5504project',
        host: process.env.AWS_MYSQL_IP || 'localhost',
        port: process.env.AWS_MYSQL_PORT || '3306',
        user: process.env.AWS_MYSQL_USER || 'root',
        password: process.env.AWS_MYSQL_PW || 'root',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
        dateStrings: true
    });

    return pool;
}

module.exports = MysqlDB;