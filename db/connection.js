const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company',
    password: 'cchs8217291HCC',
});

module.exports = connection;