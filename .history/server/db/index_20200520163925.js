const mysql = require('mysql');

mysql.createPool({
    connectionLimit:10,
    user: 'root',
    password: 'welcome17',
    database: 'phonesapp',
    host: 'localhost',
    port: '3306'
});

let taskdb = {};

taskdb.all = ()=>{

};

module.exports = taskdb;